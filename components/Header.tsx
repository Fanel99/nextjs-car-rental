import { css } from '@emotion/react';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';
import Modal from 'react-modal';

const containerFullWidth = css`
  max-width: 1920px;
  background-color: #191919;
`;
const container = css`
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;
`;

const headerContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #191919;
  padding: 5px 0;

  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    font-size: 25px;

    li {
      &:hover {
        color: #c59e47;
        transform: scale(1.1);
      }
    }
  }
`;
const socialIcon = css`
  margin: 0px;
  color: #e7e7e7;
`;

const callItems = css`
  color: #e7e7e7;
  letter-spacing: 1;
`;

const loginPart = css`
  color: #e7e7e7;
  margin-bottom: 0px;
`;

// Last parte with login and hide, need to make it nicer!

const headerLogout = css`
  color: #e7e7e7;

  a {
    color: #e7e7e7;
  }
`;

const registerLogout = css`
  display: flex;
  gap: 20px;
  a {
    color: #e7e7e7;
  }
`;

type Props = {
  username?: string;
};

function Header(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [register, setRegister] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function toggleModalRegister() {
    setRegister(!register);
  }

  return (
    <div css={containerFullWidth}>
      <div css={container}>
        <div css={headerContainer}>
          <div css={socialIcon}>
            <ul>
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li>
                {' '}
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li>
                {' '}
                <FontAwesomeIcon icon={faTwitter} />
              </li>
              <li>
                {' '}
                <FontAwesomeIcon icon={faYoutube} />
              </li>
            </ul>
          </div>
          <div css={callItems}>
            <p>Call Us: +43 6677766767</p>
          </div>

          {/* Login & Sign Up Part  */}

          {/*
          <div css={loginPart}>
            <Modal
              isOpen={register}
              onRequestClose={toggleModalRegister}
              contentLabel="Register Form"
              style={customStyles}
            >
              <div css={formStyless}>
                <div className="container">
                  <form action="">
                    <div className=" title titleRegister">Sign Up</div>

                    <div className="input-box">
                      <input placeholder="Username" required
                      value={username}
                      onChange={(event) => setUsername(event.currentTarget.value)}
                      />
                      <div className="underline" />
                    </div>
                    <div className="input-box">
                      <input
                       value={password}
                       onChange={(event) => setPassword(event.currentTarget.value)}
                        type="password"
                        placeholder="Enter your Password"
                        required
                      />
                      <div className="underline" />
                    </div>

                    <div className="input-box button">
                      <input type="submit" value="Create Account" />
                    </div>
                  </form>
                </div>
              </div>
            </Modal>

            <Modal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              contentLabel="Sign In Form"
              style={customStyles}
              ariaHideApp={false}
            >
              {' '}
              <div css={formStyles}>
                <div className="container">
                  <form action="">
                    <div className="title">Login</div>
                    <div className="input-box">
                      <input placeholder="Enter your username" required
                       value={username}
                       onChange={(event) => setUsername(event.currentTarget.value)}
                      />
                      <div className="underline" />
                    </div>

                    <div className="input-box">
                      <input
                        type="password"
                        placeholder="Enter your Password"
                        required
                         value={password}
                         onChange={(event) => setPassword(event.currentTarget.value)}
                      />
                      <div className="underline" />
                    </div>

                    <div className="input-box button">
                      <input type="submit" value="Continue" />
                    </div>
                  </form>
                  <div className="option">or Connect with Social Media</div>
                  <div className="facebook">
                    <a>
                      <FontAwesomeIcon icon={faFacebook} />
                      Login with Facebook
                    </a>
                  </div>
                  <div className="twitter">
                    <a>
                      <FontAwesomeIcon icon={faTwitter} />
                      Login with Twitter
                    </a>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
          */}
          <div css={headerLogout}>
            {props.username ? (
              <>Logged in as {props.username} &nbsp;&nbsp;</>
            ) : (
              ''
            )}
            {!props.username && (
              <div>
                <div css={registerLogout}>
                  <Link href="/register">
                    <a>Register</a>
                  </Link>
                  <Link href="/login">
                    <a>Login</a>
                  </Link>
                </div>
              </div>
            )}
            {props.username && (
              <Link href="/logout">
                <a>Logout</a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

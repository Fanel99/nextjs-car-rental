import { css } from '@emotion/react';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Modal from 'react-modal';

const container = css`
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;
`;

const headerContainer = css`
  display: flex;
  justify-content: space-between;
  background-color: #191919;

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
  padding-left: 12%;
  color: #e7e7e7;
`;

const callItems = css`
  color: #e7e7e7;
  letter-spacing: 1;
  margin-top: 3px;
`;

const loginPart = css`
  color: #e7e7e7;
  margin-bottom: 0px;
  padding-right: 12%;
  margin-top: 3px;

  button {
    padding: 4px;
    font-size: 16px;
    margin-right: 10px;

    &:hover {
      color: #c59e47;
      transform: scale(1.1);
    }
  }
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '400px',
    marginRight: '-50%',
    border: 'none',
    background: 'none',
    transform: 'translate(-50%, -50%)',
  },
};
const formStyles = css`
  .container {
    background: #fff;
    max-width: 350px;
    width: 100%;
    padding: 25px 30px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.15);
  }

  .container form .title {
    font-size: 30px;
    font-weight: 600;
    margin: 20px 0 10px 0;
    position: relative;
  }

  .container form .title:before {
    content: '';
    position: absolute;
    height: 4px;
    width: 33px;
    bottom: 3px;
    left: 0;
    border-radius: 5px;
    background: linear-gradient(to right, #000000 0%, #403d3e 100%);
  }
  .container form .titleRegister:before {
    content: '';
    position: absolute;
    height: 4px;
    width: 27px;
    bottom: 3px;
    left: 0;
    border-radius: 5px;
    background: linear-gradient(to right, #000000 0%, #403d3e 100%);
  }

  .container form .input-box {
    width: 100%;
    height: 45px;
    margin-top: 25px;
    position: relative;
  }

  .container form .input-box input {
    height: 100%;
    width: 100%;
    outline: none;
    font-size: 16px;
    border: none;
  }

  .container form .underline:before {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    background: #ccc;
    left: 0;
    bottom: 0;
  }

  .container form .underline:after {
    position: absolute;
    content: '';
    height: 2px;
    width: 100%;
    left: 0;
    bottom: 0;
    background: linear-gradient(to right, #000000 0%, #403d3e 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.3s ease;
  }
  .container form .input-box input:focus ~ .underline:after,
  .container form .input-box input:valid ~ .underline:after {
    transform: scaleX(1);
    transform-origin: left;
  }

  .container form .button {
    margin: 40px 0 20px 0;
  }

  .container form .input-box input[type='submit'] {
    font-size: 17px;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    background: linear-gradient(to right, #000000 0%, #403d3e 100%);
    transition: all 0.3s ease;
  }

  .container form .input-box input[type='submit']:hover {
    letter-spacing: 1px;
    background: linear-gradient(to left, #000000 0%, #403d3e 100%);
  }

  .container .option {
    font-size: 14px;
    text-align: center;
    margin-bottom: 20px;
  }

  .container .twitter a,
  .container .facebook a {
    display: block;
    width: 100%;
    height: 45px;
    font-size: 17px;
    text-decoration: none;
    padding-left: 20px;
    color: #fff;
    line-height: 45px;
    border-radius: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }

  .container .twitter a {
    margin: 20px 0 15px 0;
    background: linear-gradient(to left, #00acee 0%, #1abeff 100%);
  }

  .container .twitter a:hover {
    background: linear-gradient(to right, #00acee 0%, #1abeff 100%);
  }

  .container .facebook a {
    background: linear-gradient(to left, #3b5998 0%, #476bb8 100%);
  }

  .container .facebook a:hover {
    background: linear-gradient(to right, #3b5998 0%, #476bb8 100%);
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [register, setRegister] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function toggleModalRegister() {
    setRegister(!register);
  }
  return (
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

        <div css={loginPart}>
          <button onClick={toggleModal}>Login</button>
          <button onClick={toggleModalRegister}>Register</button>{' '}
          <Modal
            isOpen={register}
            onRequestClose={toggleModalRegister}
            contentLabel="Register Form"
            style={customStyles}
          >
            <div css={formStyles}>
              <div class="container">
                <form action="">
                  <div class=" title titleRegister">Sign Up</div>
                  <div class="input-box">
                    <input placeholder="Enter your Email" required />
                    <div class="underline" />
                  </div>
                  <div class="input-box">
                    <input
                      type="password"
                      placeholder="Enter your Password"
                      required
                    />
                    <div class="underline" />
                  </div>
                  <div class="input-box">
                    <input
                      type="password"
                      placeholder="Confirm your Password"
                      required
                    />
                    <div class="underline" />
                  </div>
                  <div class="input-box button">
                    <input type="submit" value="Continue" />
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
          >
            {' '}
            <div css={formStyles}>
              <div class="container">
                <form action="">
                  <div class="title">Login</div>
                  <div class="input-box">
                    <input placeholder="Enter your username" required />
                    <div class="underline" />
                  </div>

                  <div class="input-box">
                    <input
                      type="password"
                      placeholder="Enter your Password"
                      required
                    />
                    <div class="underline" />
                  </div>

                  <div class="input-box button">
                    <input type="submit" value="Continue" />
                  </div>
                </form>
                <div class="option">or Connect with Social Media</div>
                <div class="facebook">
                  <a>
                    <FontAwesomeIcon icon={faFacebook} />
                    Login with Facebook
                  </a>
                </div>
                <div class="twitter">
                  <a>
                    <FontAwesomeIcon icon={faTwitter} />
                    Login with Twitter
                  </a>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Header;

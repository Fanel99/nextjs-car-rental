import { css } from '@emotion/react';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

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
  margin-top: 2px;

  a {
    color: #e7e7e7;
    padding: 5px;
    font-size: 18px;
  }
`;

function Header() {
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
        <div css={loginPart}>
          <Link href="/">
            <a>Register</a>
          </Link>
          <Link href="/">
            <a>Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;

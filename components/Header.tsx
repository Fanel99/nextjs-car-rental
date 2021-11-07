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

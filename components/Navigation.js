import { css } from '@emotion/react';
import Link from 'next/link';

const container = css`
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;
`;

const logoNav = css`
  background-image: url(/pictures/logo.png);
  width: 130px;
  height: 130px;
  background-size: cover;
`;

const navContainer = css`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  align-content: center;
  margin-top: 50px;
`;

const navLinks = css`
  display: flex;
  gap: 20px;
  padding: 10px;
  font-size: 18px;

  a:hover {
    color: #c59e47;
    transform: scale(1.2);
    padding-top: 5px;
    border-bottom: 2px solid #c59e47;
  }
`;

const navHost = css`
  border: solid 2px #c59e47;
  font-size: 18px;
  padding: 10px;

  &:hover {
    background-color: #c59e47;
  }

  a:hover {
    color: #fff;
  }
`;

function Navigation() {
  return (
    <div css={container}>
      <div css={navContainer}>
        {/* logo  */}
        <div css={logoNav} />
        {/* Navigation Links  */}
        <div css={navLinks}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Deals</a>
          </Link>
          <Link href="/">
            <a>About Us</a>
          </Link>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </div>
        {/* Link to become a Host */}
        <div css={navHost}>
          {' '}
          <Link href="/">
            <a>Become a host</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

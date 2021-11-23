import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { css } from '@emotion/react';
import { Divide as Hamburger } from 'hamburger-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../public/pictures/logo.png';

const container = css`
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 0 20px;

  .datePicker {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* .rdrDefinedRangesWrapper {
      display: none;
    } */

    @media (max-width: 1024px) {
      .rdrDateRangePickerWrapper .rdrDefinedRangesWrapper {
        display: none;
      }
    }
  }

  .wrapperButtons {
    display: flex;
    justify-content: center;
  }
  .cancel {
    padding: 5px 15px;
    border: 1px solid #c59e47;
    margin-bottom: 20px;
    margin-right: 50px;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
      background-color: #c59e47;
      color: #fff;
    }
  }
  .search {
    padding: 5px 15px;
    border: 1px solid #c59e47;
    margin-bottom: 20px;
    margin-left: 50px;
    margin-top: 20px;
    cursor: pointer;
    &:hover {
      background-color: #c59e47;
      color: #fff;
    }
  }
`;

const logoNav = css`
  z-index: 3;
  position: relative;
  flex: 1 1 33%;
  .logoNavImage {
    position: absolute;
    top: -20px;
    img {
      border-radius: 5px;
    }
  }
`;

const navContainer = css`
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin: 20px 0;
  position: relative;

  input {
    width: 350px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid #c59e47;
    padding-left: 10px;
  }
  @media (max-width: 1024px) {
    .open {
      transform: translateX(0);
      transition: 0.3s ease-in;
    }
  }
`;

const navLinks = css`
  display: flex;
  gap: 20px;
  font-size: 18px;
  flex: 1 1 33%;
  justify-content: center;

  @media (max-width: 1024px) {
    transform: translateX(110%);
    min-width: 100%;
    left: -20px;
    right: -20px;
    position: absolute;
    top: 50px;
    background: white;
    padding: 15px 20px;

    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: 0.3s ease-out;
    display: flex;
    flex-direction: column;
    z-index: 10;
    text-align: center;
  }

  a {
    position: relative;
    transition: 0.4s;
  }
  a:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #c59e47;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  a:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  a:hover {
    color: #c59e47;
  }

  @media (min-width: 1024px) {
    a:last-child {
      display: none;
    }
  }
`;

const navHost = css`
  flex: 1 1 33%;
  display: flex;
  justify-content: flex-end;

  a {
    border: solid 2px #c59e47;
    font-size: 18px;
    padding: 4px;
    border-radius: 4px;
    display: inline-block;
    &:hover {
      background-color: #c59e47;
    }
    @media (max-width: 1024px) {
      display: none;
    }
  }

  a:hover {
    color: #fff;
  }

  .hamburger-react {
    height: 52px;
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

function Navigation(props) {
  const [showMenu, setShowMenu] = useState(false);
  const { user } = props;
  console.log('from Nav', user);
  // console.log('from Nav user id', user.id);

  return (
    <div css={container}>
      <div css={navContainer}>
        {/* Navigation Links  */}
        <div css={logoNav}>
          <div className="logoNavImage">
            <Image src={logo} alt="logo" />
          </div>
        </div>

        <div>
          <div css={navLinks} className={showMenu ? 'open' : 'closed'}>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/cars">
              <a>Deals</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>

            <Link href={`/users/${props.user}`}>
              <a>Profile</a>
            </Link>

            <Link className="lastLink" href="/becomeahost">
              <a>Become a host</a>
            </Link>
          </div>
        </div>

        {/* Link to become a Host */}
        <div css={navHost}>
          <Link href="/becomeahost">Become a host</Link>
          <Hamburger
            className="hamburger-react"
            toggled={showMenu}
            toggle={setShowMenu}
            duration={0.2}
            easing="ease-in"
            hideOutline={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Navigation;

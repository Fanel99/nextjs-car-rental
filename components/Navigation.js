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
`;

const navLinks = css`
  display: flex;
  gap: 20px;
  font-size: 18px;
  flex: 1 1 33%;
  justify-content: center;

  @media (max-width: 1024px) {
    transform: translateX(100%);
    width: 100%;
    position: absolute;
    top: 50px;
    right: 0;
    background: white;
    padding: 15px 20px;
    max-width: 350px;
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

  // Tantalau de ce nu merge? :(

  .open {
    @media (max-width: 1024px) {
      transform: translateX(0);
      transition: 0.3s ease-in;
    }
    @media (max-width: 760px) {
      max-width: 100%;
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
  // const [searchInput, setSearchInput] = useState('');
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  const [showMenu, setShowMenu] = useState(false);

  // const handleSelect = (ranges) => {
  //   setStartDate(ranges.selection.startDate);
  //   setEndDate(ranges.selection.endDate);
  // };

  // const selectionRange = {
  //   startDate: startDate,
  //   endDate: endDate,
  //   key: 'selection',
  // };

  // const resetInput = () => {
  //   setSearchInput('');
  // };

  // const search = () => {
  //   router.push({
  //     pathname: '/cars',
  //     query: {
  //       location: searchInput,
  //       startDate: startDate.toISOString(),
  //       endDate: endDate.toISOString(),
  //     },
  //   });
  // };

  return (
    <div css={container}>
      <div data-aos="fade-down" css={navContainer}>
        {/* Navigation Links  */}
        <div data-aos="fade-down" css={logoNav}>
          <div className="logoNavImage">
            <Image src={logo} alt="logo" />
          </div>
        </div>

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
          {!props.username && (
            <div>
              <Link href={`/users/${props.username}`}>
                <a>Profile</a>
              </Link>
            </div>
          )}
        </div>

        {/* Link to become a Host */}
        <div data-aos="fade-down" css={navHost}>
          <Link href="/becomeahost">Become a host</Link>
          <Hamburger
            className="hamburger-react"
            toggled={showMenu}
            toggle={setShowMenu}
            duration={0.5}
            easing="ease-in"
            hideOutline={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Navigation;

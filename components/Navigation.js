import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { css } from '@emotion/react';
import Image from 'next/image';
import Link from 'next/link';
import router from 'next/router';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
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
`;

const navHost = css`
  flex: 1 1 33%;
  display: flex;
  justify-content: flex-end;
  a {
    border: solid 2px #c59e47;
    font-size: 18px;
    padding: 4px;
    display: inline-block;
    &:hover {
      background-color: #c59e47;
    }
  }

  a:hover {
    color: #fff;
  }
`;

function Navigation() {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const resetInput = () => {
    setSearchInput('');
  };

  const search = () => {
    router.push({
      pathname: '/cars',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      },
    });
  };

  return (
    <div css={container}>
      {/* logo  */}

      <div data-aos="fade-down" css={navContainer}>
        {/* Navigation Links  */}
        <div data-aos="fade-down" css={logoNav}>
          <div className="logoNavImage">
            <Image src={logo} alt="logo" />
          </div>
        </div>
        <div css={navLinks}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/cars">
            <a>Deals</a>
          </Link>
          <Link href="/">
            <a>Contact</a>
          </Link>
        </div>

        {/* Link to become a Host */}
        <div data-aos="fade-down" css={navHost}>
          <Link href="/becomeahost">Become a host</Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

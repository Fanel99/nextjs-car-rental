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
  position: absolute;
  left: 0;
`;

const navContainer = css`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  margin: 20px 0;
  position: relative;

  input {
    width: 350px;
    height: 40px;
    border-radius: 5px;
    border-color: #c59e47;
    padding-left: 10px;
  }
`;

const navLinks = css`
  display: flex;
  gap: 20px;
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
  padding: 4px;

  &:hover {
    background-color: #c59e47;
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
      <div data-aos="fade-down" css={logoNav}>
        <Image src={logo} />
      </div>
      <div data-aos="fade-down" css={navContainer}>
        {/* Navigation Links  */}
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
        <div>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search..."
          />
        </div>

        {/* Link to become a Host */}
        <div data-aos="fade-down" css={navHost}>
          <Link href="/becomeahost">
            <a>Become a host</a>
          </Link>
        </div>
      </div>
      {searchInput && (
        <div className="datePicker">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#c59e47']}
            onChange={handleSelect}
            dateFormat="dd MMM yy"
          />

          <div className="wrapperButtons">
            <button onClick={resetInput} className="cancel">
              Cancel
            </button>
            <button onClick={search} className="search">
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;

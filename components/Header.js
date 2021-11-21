import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { css } from '@emotion/react';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import router from 'next/router';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';

const containerFullWidth = css`
  max-width: 1920px;
  background-color: #191919;
  margin: 0 auto;
`;
const container = css`
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 0 20px;

  .headerInput {
    width: 350px;
    height: 40px;
    border-radius: 5px;
    border: 2px solid #c59e47;
    padding-left: 10px;
  }
  .datePicker {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border: 2px solid grey;
    z-index: 4;
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
const headerContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #191919;
  padding: 10px 0;
  position: relative;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

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
  li {
    font-size: 0;
    cursor: pointer;
  }
  svg {
    width: 30px;
    height: 30px;
  }
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

function Header(props) {
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
          <div>
            <input
              className="headerInput"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search..."
            />
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

          <div css={headerLogout}>
            {props.username ? (
              <>Logged in as {props.username} &nbsp;|| &nbsp;&nbsp;</>
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
            {props.username && <Link href="/logout">Logout</Link>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

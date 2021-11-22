import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { css } from '@emotion/react';
import { loadStripe } from '@stripe/stripe-js';
import Image from 'next/image';
import React, { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import Layout from '../../components/Layout';
import Map from '../../components/Map';
import Navigation from '../../components/Navigation';
import canister from '../../public/pictures/canister1.png';
import city from '../../public/pictures/city.png';
import door from '../../public/pictures/door1.png';
import fuel from '../../public/pictures/fuel1.png';
import street from '../../public/pictures/location1.png';
import seat from '../../public/pictures/seat1.png';

const container = css`
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 150px;

  .itemsWrapper {
    display: flex;
    align-items: center;
    gap: 50px;
    align-items: flex-start;
    margin-top: 200px;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }

  .datePickerWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: sticky;
    top: 40px;
    @media (max-width: 1024px) {
      width: 378px;
      padding: 20px;

      .rdrDefinedRangesWrapper {
        display: none;
      }
    }
  }
  p {
    margin-bottom: 20px;
  }
`;

const singleCarContainer = css`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h4 {
    font-size: 30px;
    margin-top: 20px;
    text-align: center;
    letter-spacing: 1.4px;
  }

  .iconsWrapper {
    display: flex;
    gap: 30px;
    justify-content: space-around;
    width: 100%;
    flex-direction: column;
    margin-top: 20px;

    @media (max-width: 1024px) {
      padding: 20px;
    }

    p {
      display: flex;
      align-items: center;
    }
  }

  .iconsSingle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 500px;

    p {
      flex: 1 1 50%;
    }

    p span {
      margin-left: 10px;
    }
  }

  .description {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 100%;

    @media (max-width: 1024px) {
      padding: 20px;
      text-align: center;
      margin-top: 30px;
    }
    h3 {
      color: #556cd6;
    }
  }
`;

const imgWrapper = css`
  position: relative;
  width: 700px;
  height: 400px;

  @media (max-width: 1024px) {
    width: 350px;
    height: 250px;
  }

  p {
    display: flex;
    align-items: center;
  }
`;

const mapContainer = css`
  height: 300px;
  max-width: 100%;
  margin-top: 100px;

  @media (max-width: 1024px) {
    width: 300px;
    height: 400px;
    margin: 0 auto;
  }
`;

function SingleCar({ cardata, username }) {
  // console.log(cardata);

  // const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const diffDays = Math.round(Math.abs((startDate - endDate) / oneDay));

  // console.log(diffDays);
  // console.log(startDate);
  // console.log(endDate);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  // const todalSelectedDays = Number(startDate) + Number(endDate);
  // console.log(todalSelectedDays);

  // stripe

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.',
      );
    }
  }, []);

  // Map box

  return (
    <Layout username={username}>
      <Navigation />

      <div css={container}>
        <div className="itemsWrapper">
          <div css={singleCarContainer}>
            <div css={imgWrapper}>
              <Image src={cardata.imageUrl} layout="fill" objectFit="cover" />
            </div>
            <h4> {cardata.carName}</h4>
            <h3>HOSTED BY {username}</h3>
            <div className="iconsWrapper">
              <div className="iconsSingle">
                <p>
                  <Image src={seat} width={40} height={40} />
                  <span> {cardata.seats}</span>
                </p>
                <p>
                  {' '}
                  <Image src={fuel} width={40} height={40} />
                  <span className="fuel">{cardata.fuel}</span>
                </p>
              </div>
              <div className="iconsSingle">
                <p>
                  {' '}
                  <Image src={door} width={40} height={40} />
                  <span>2 doors</span>
                </p>
                <p>
                  {' '}
                  <Image src={canister} width={40} height={40} />
                  <span>25MPG</span>
                </p>
              </div>
              <div className="iconsSingle">
                <p>
                  <Image src={street} width={40} height={40} />
                  <span>{cardata.pickUpAdress}</span>
                </p>
                <p>
                  <Image src={city} width={40} height={40} />
                  <span>{cardata.city}</span>
                </p>
              </div>
            </div>
            <div className="description">
              <h3>Description</h3>
              <p>{cardata.description}</p>
              <p> Emergency Contact: {cardata.phone} </p>
            </div>
          </div>
          <div className="datePickerWrapper">
            <p> Price: {cardata.dayPrice} € / day</p>
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={['#c59e47']}
              onChange={handleSelect}
            />
            <div>
              {' '}
              <form action="/api/checkout_sessions" method="POST">
                <section>
                  <button role="link">Book Now</button>
                </section>
                <style jsx>
                  {`
                    section {
                      background: #ffffff;
                      display: flex;
                      flex-direction: column;
                      width: 200px;
                      height: 112px;
                      border-radius: 6px;
                      justify-content: space-between;
                      margin-top: 30px;
                    }
                    button {
                      height: 36px;
                      background: #556cd6;
                      border-radius: 4px;
                      color: white;
                      border: 0;
                      font-weight: 600;
                      cursor: pointer;
                      transition: all 0.2s ease;
                      box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
                    }
                    button:hover {
                      opacity: 0.8;
                    }
                  `}
                </style>
              </form>
            </div>
          </div>
        </div>
        <div>
          Review Section
          {/* <CommentsRatings /> */}
        </div>
        <div css={mapContainer}>{/* <Map /> */}</div>
      </div>
    </Layout>
  );
}

export default SingleCar;

export async function getServerSideProps(context) {
  const { getCarData } = await import('../../util/database');

  // console.log(context.query);

  const cardata = await getCarData(Number(context.query.carsid));

  const { getUserBySessionToken } = await import('../../util/database');
  const sessionToken = context.req.cookies.sessionToken;
  const sessionUser = await getUserBySessionToken(sessionToken);

  if (!sessionUser) {
    return {
      redirect: {
        permanent: false,
        destination: `/login?returnTo=${context.req.url}`,
      },
    };
  }

  // console.log('single page', cardata);

  return {
    props: {
      cardata,
    },
  };
}

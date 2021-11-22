import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { css } from '@emotion/react';
import { format } from 'date-fns';
import moment from 'moment';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Map from '../../components/Map';
import Navigation from '../../components/Navigation';

const containerMap = css`
  flex: 1 1 30%;
  position: sticky;
  top: 0;
  height: 350px;
  @media (max-width: 1024px) {
    margin-top: 50px;
  }
`;

const headerWrapper = css`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const containerAll = css`
  display: flex;
  margin-top: 130px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const container = css`
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 0 20px;
`;

const wrapperItems = css`
  display: flex;
  grid-gap: 20px;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: auto;
    margin-left: 0;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const items = css`
  flex: 1 1 70%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  img {
    width: 100%;
    min-height: 350px;
    object-fit: cover;
    border-radius: 5px;
  }
  div {
    flex: 1 1 48%;
    display: flex;
    flex-wrap: wrap;
  }
`;

function Cars({ carsdata, username }) {
  const router = useRouter();

  // destructuring from URL and  combine start and end Date
  // for displaying dynamic  info from search bar
  let { location, startDate, endDate } = router.query;

  // console.log('before', startDate);
  // console.log('before', endDate);
  // console.log('before', location);

  if (typeof startDate === 'undefined') {
    startDate = new Date();
  }

  if (typeof endDate === 'undefined') {
    endDate = new Date();
  }

  if (location === 'undefined') {
    location = 'Viena';
  }
  console.log('from query location', location);
  console.log('from query', startDate);
  console.log('from query', endDate);

  //  format the  time
  const formattedStartDate = moment(startDate).format('MMM Do YYYY');
  console.log('from format', formattedStartDate);

  const formattedEnddate = moment(endDate).format('MMM Do YYYY');
  console.log('from format', formattedEnddate);

  const range = `${formattedStartDate} -  ${formattedEnddate} `;

  //    <p>Search results for {location} from {range} </p>

  return (
    <Layout username={username}>
      <Head>
        <title>Deals | Oldie but goodie</title>
      </Head>
      <Navigation />
      <div css={headerWrapper}>
        <p>
          Search results for {location} from {range}{' '}
        </p>
      </div>
      <div css={containerAll}>
        <div css={container}>
          <div css={wrapperItems}>
            <div css={items}>
              {carsdata.map((item) => {
                return (
                  <div key={`cars-${item.id}`}>
                    <Link href={`/cars/${item.id}`}>
                      <a>
                        <img src={item.imageUrl} alt="cars" />{' '}
                      </a>
                    </Link>
                    <h2>{item.carName}</h2>
                  </div>
                );
              })}
            </div>
            <div css={containerMap}>
              <Map carsdata={carsdata} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Cars;

export async function getServerSideProps() {
  const carsdataResponse = await fetch('http://localhost:3000/api/cars');
  const carsdata = await carsdataResponse.json();
  // console.log('from gSSP', carsdata);
  return {
    props: {
      carsdata,
    },
  };
}

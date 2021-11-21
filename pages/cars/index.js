import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { css } from '@emotion/react';
import { format } from 'date-fns';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Map from '../../components/Map';
import Navigation from '../../components/Navigation';
import { setParsedCookie } from '../../util/cookies';

const containerMap = css`
  flex: 1 1 30%;
  position: sticky;
  top: 0;
  height: 350px;
  @media (max-width: 1024px) {
    margin-top: 50px;
  }
`;

const containerAll = css`
  display: flex;
  margin-top: 200px;

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
  }
  div {
    flex: 1 1 48%;
    display: flex;
    flex-wrap: wrap;
  }
`;

const imgWrapper = css`
  position: relative;
  width: 400px;
  height: 250px;
  @media (max-width: 1024px) {
    width: 350px;
    height: 250px;
  }
`;

function Cars({ carsdata, username }) {
  const router = useRouter();

  // destructuring from URL and  combine start and end Date
  // for displaying dynamic  info from search bar and  format the data
  const { location, startDate, endDate } = router.query;

  // if (typeof startDate !== 'undefined') {
  //   startDate = new Date();
  // }

  // if (typeof endDate !== 'undefined') {
  //   endDate = new Date();
  // }

  // console.log(startDate);
  // console.log(endDate);
  // console.log(location);

  // const formattedStartDate = format(new Date(startDate), 'dd MMM yyyy');
  // console.log(formattedStartDate);

  // const formattedEddate = format(new Date(endDate), 'dd MMM yyyy');
  // console.log(formattedEddate);
  // setParsedCookie('endDate', formattedEddate);
  // const range = `${formattedStartDate} -  ${formattedEddate} `;

  //    <p>Search results for {location} from {range} </p>

  return (
    <Layout username={username}>
      <Head>
        <title>Deals | Oldie but goodie</title>
      </Head>
      <Navigation />

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

          {/* <p>
          Search results for {location} from {range}{' '}
        </p> */}
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

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
  height: 800px;
  width: 500px;

  margin: 0 auto;
  margin-top: 250px;
`;

const containerAll = css`
  display: flex;
`;

const container = css`
  margin-top: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  max-width: 800px;
  justify-content: center;
  margin-left: 50px;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const imgWrapper = css`
  position: relative;
  width: 400px;
  height: 250px;
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
          {carsdata.map((item) => {
            return (
              <div key={`cars-${item.id}`}>
                <Link href={`/cars/${item.id}`}>
                  <a>
                    <div css={imgWrapper}>
                      <Image
                        src={item.imageUrl}
                        alt="cars"
                        objectFit="cover"
                        layout="fill"
                      />{' '}
                    </div>
                  </a>
                </Link>
                <h2>{item.carName}</h2>
              </div>
            );
          })}
        </div>
        {/* <p>
          Search results for {location} from {range}{' '}
        </p> */}
        <div css={containerMap}>
          <Map carsdata={carsdata} />
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

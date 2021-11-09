import { css } from '@emotion/react';
import Image from 'next/image';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';

const singleCarContainer = css`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 100vh;
  margin-top: 200px;
`;

const imgWrapper = css`
  position: relative;
  width: 700px;
  height: 400px;
`;

function singleCar({ cardata, username }) {
  // console.log(cardata);
  return (
    <div>
      <Layout username={username}>
        <Navigation />
        <div css={singleCarContainer}>
          Page for {cardata.carName}
          <div css={imgWrapper}>
            <Image src={cardata.imageUrl} layout="fill" objectFit="cover" />
          </div>
          <p>{cardata.description} </p>
          <p>{cardata.dayPrice} € </p>
          <p>{cardata.city} </p>
          <p>{cardata.phone} </p>
        </div>
      </Layout>
    </div>
  );
}

export default singleCar;

export async function getServerSideProps(context) {
  const { getCarData } = await import('../../util/database');

  // console.log(context.query);

  const cardata = await getCarData(Number(context.query.carsid));

  console.log('single page', cardata);

  return {
    props: {
      cardata,
    },
  };
}

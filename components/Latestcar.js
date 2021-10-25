import { css } from '@emotion/react';
import Image from 'next/image';
import car1 from '../public/pictures/car1.jpg';
import car2 from '../public/pictures/car2.jpg';
import car3 from '../public/pictures/car3.jpg';
import car4 from '../public/pictures/car4.jpg';
import car5 from '../public/pictures/car5.jpg';
import car6 from '../public/pictures/car6.jpg';
import car7 from '../public/pictures/car7.jpg';
import car8 from '../public/pictures/car8.jpg';

const container = css`
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;

  h2 {
    color: #020243;
    text-align: center;
    margin-top: 50 px;
    margin-bottom: 50 px;
    letter-spacing: 3px;
    font-size: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
    span {
      margin-left: 20px;
    }
  }
`;

const imageWrapper = css`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px;

  img:hover {
    transform: scale(1);
  }
`;

function Latestcar() {
  return (
    <div css={container}>
      <h2>
        Latest <span>Cars</span>
      </h2>
      <div>
        <div css={imageWrapper}>
          <Image src={car1} width="300" height="360" alt="classic car" />
          <Image src={car2} width="300" height="360" alt="classic car" />
          <Image src={car3} width="300" height="360" alt="classic car" />
          <Image src={car4} width="300" height="360" alt="classic car" />
        </div>

        <div css={imageWrapper}>
          <Image src={car5} width="300" height="360" alt="classic car" />
          <Image src={car6} width="300" height="360" alt="classic car" />
          <Image src={car7} width="300" height="360" alt="classic car" />
          <Image src={car8} width="300" height="360" alt="classic car" />
        </div>
      </div>
    </div>
  );
}

export default Latestcar;

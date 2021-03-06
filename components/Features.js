import { css } from '@emotion/react';
import Image from 'next/image';
import porsche from '../public/pictures/car6.jpg';
import mercedes from '../public/pictures/car8.jpg';

const container = css`
  max-width: 1366px;
  margin: 0 auto 100px;
  width: 100%;
  padding: 0 20px;

  h2 {
    color: #020243;
    text-align: center;
    letter-spacing: 3px;
    font-size: 50px;
    margin: 75px 0 30px;

    span {
      margin-left: 20px;
    }
  }
`;

const cardsWrapper = css`
  display: flex;
  border: 1px solid #000;
  overflow: hidden;
  @media (max-width: 1024px) {
    flex-direction: column;
    border: none;
  }
`;

const cardWrapper = css`
  display: flex;
  max-width: 50%;
  @media (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 30px;
  }
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

const imgWrapper = css`
  position: relative;
  width: 350px;
  height: 360px;
  @media (max-width: 769px) {
    max-width: 100%;
    min-height: 400px;
    width: auto;
  }
`;

const cardText = css`
  flex: 1 1 350px;
  border: 1px solid #c59e47;
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1024px) {
    border-left: none;
    margin: 0 20px 0 0;
  }
  @media (max-width: 769px) {
    border: 1px solid #c59e47;
    margin: 0%;
  }

  h3 {
    margin-bottom: 30px;
  }
  p {
    margin-bottom: 30px;
    text-align: center;
  }

  button {
    background: #020243;
    border: 1 px solid #020243;
    font-size: 19px;
    color: #fff;
    letter-spacing: 3px;
    padding: 8px;
    cursor: pointer;

    &:hover {
      transition: all 0.2s ease-in;
      border: 1 px solid #020243;
      background: none;
      color: #020243;
    }
  }
`;

function Features() {
  return (
    <div css={container}>
      <h2>
        Features <span> Cars</span>
      </h2>
      <div css={cardsWrapper}>
        <div data-aos="fade-right" css={cardWrapper}>
          <div css={imgWrapper}>
            <Image
              src={porsche}
              alt="porsche model car"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div css={cardText}>
            <h3>Porche 911</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
              amet ipsum magni ratione esse? Molestias, enim!{' '}
            </p>
            <button>Read More</button>
          </div>
        </div>
        <div data-aos="fade-left" css={cardWrapper}>
          <div css={imgWrapper}>
            <Image
              src={mercedes}
              alt="mercedes model car"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div css={cardText}>
            <h3>Mclaren</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
              amet ipsum magni ratione esse? Molestias, enim!{' '}
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

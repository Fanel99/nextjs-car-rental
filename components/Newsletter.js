import { css } from '@emotion/react';
import Image from 'next/image';
import border from '../public/pictures/border.png';
import cobra from '../public/pictures/newsletter.jpg';

const container = css`
  max-width: 1366px;
  margin: 0 auto 100px;
  width: 100%;
`;

const containerNewsletter = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  overflow: hidden;
`;
const leftSide = css`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 3;

  .leftSideText {
    position: absolute;
    top: 20%;
    left: 10%;

    h4 {
      font-size: 28px;
      letter-spacing: 7px;
      margin-bottom: 10%;
    }
    p {
      margin-top: 30px;
      line-height: 1.5;
    }
  }

  img {
  }
`;
const rightSide = css`
  flex: 0 1 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  .rightSideText {
    position: absolute;
    display: flex;
    flex-direction: column;
    margin-left: 10%;

    button {
      border: 1px solid #fff;
      font-size: 30px;
      color: #fff;
      letter-spacing: 5px;
      padding: 25px;
      background: none;
      cursor: pointer;
      text-transform: uppercase;

      &:hover {
        background: #fff;
        color: #000;
        transition: all 0.3s ease-in;
      }
    }
  }
  .newsInput {
    color: #fff;
    background: none;
    background-color: none;
    border-left: none;
    border-right: none;
    border-top: none;
    font-size: 20px;
    border-bottom: 1px solid #fff;
    margin-bottom: 10px;
    padding: 10px;
  }
  .newsInput::placeholder {
    color: #fff;
  }
`;

function Newsletter() {
  return (
    <div css={container}>
      <div css={containerNewsletter}>
        <div css={leftSide}>
          <Image src={border} height={400} alt="frame for news" />
          <div className="leftSideText">
            <h4>Newsletter</h4>
            <p>
              Subscribe to the Oldie But Goodie mailing list
              <br /> to receive updates on new <br /> arrivals, special
              offersand other discount <br /> information.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" css={rightSide}>
          <Image src={cobra} height={500} alt="cobra car as background" />
          <div className="rightSideText">
            <input placeholder="Enter your email" className="newsInput" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;

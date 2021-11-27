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

const imageWrapper = css`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 10px 0;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

const imageText = css`
  position: relative;

  .opacity {
    cursor: pointer;
  }
  :hover .opacity {
    opacity: 1;
  }
  .translate {
    transition: 0.5s;
    transition-delay: 0.2s;
  }
  :hover .translate {
    transform: translateY(0);
  }

  div {
    height: 100%;
    cursor: pointer;
  }
`;

const imageTextHover = css`
  position: absolute;
  top: 0px;
  left: 0px;
  background: rgba(12, 12, 12, 0.7);
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: opacity 500ms;
  -moz-transition: opacity 500ms;
  -o-transition: opacity 500ms;
  -webkit-transition: opacity 500ms;
  transition: opacity 0.5s;
`;

const imageTextHoverText = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
  color: #fff;
  pointer-events: none;
  transform: translateY(100%);
  transition-delay: 2s;
  cursor: pointer;

  .spanTop {
    border: 1px solid #e7e7e7;
    width: 80%;
    margin-bottom: 30px;
  }
  .spanBottom {
    border: 1px solid #e7e7e7;
    width: 80%;
    margin-top: 30px;
  }

  h3 {
    font-size: 18px;
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    margin-bottom: 10px;
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
          <div data-aos="zoom-in" data-aos-offset="300" css={imageText}>
            <Image src={car1} alt="classic car" />
            <div css={imageTextHover} className="opacity">
              <div css={imageTextHoverText} className="translate">
                <span className="spanTop" />
                <h3>Rolls Royce</h3>
                <p>
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit.
                </p>
                <p>Only 200€ /day</p>
                <span className="spanBottom" />
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-offset="300" css={imageText}>
            <Image src={car2} alt="classic car" />
            <div css={imageTextHover} className="opacity">
              <div css={imageTextHoverText} className="translate">
                <span className="spanTop" />
                <h3>Renault</h3>
                <p>
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit.
                </p>
                <p>Only 150€ /day</p>
                <span className="spanBottom" />
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-offset="300" css={imageText}>
            <Image src={car3} alt="classic car" />
            <div css={imageTextHover} className="opacity">
              <div css={imageTextHoverText} className="translate">
                <span className="spanTop" />
                <h3>Ford Mustang</h3>
                <p>
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit.
                </p>
                <p>Only 220€ /day</p>
                <span className="spanBottom" />
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-offset="300" css={imageText}>
            <Image src={car4} alt="classic car" />
            <div css={imageTextHover} className="opacity">
              <div css={imageTextHoverText} className="translate">
                <span className="spanTop" />
                <h3>Rover</h3>
                <p>
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit.
                </p>
                <p>Only 120€ /day</p>
                <span className="spanBottom" />
              </div>
            </div>
          </div>
        </div>

        <div css={imageWrapper}>
          <div data-aos="zoom-in" data-aos-offset="300" css={imageText}>
            <Image src={car5} alt="classic car" />
            <div css={imageTextHover} className="opacity">
              <div css={imageTextHoverText} className="translate">
                <span className="spanTop" />
                <h3>Porche</h3>
                <p>
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit.
                </p>
                <p>Only 170€ /day</p>
                <span className="spanBottom" />
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-offset="300" css={imageText}>
            <Image src={car6} alt="classic car" />
            <div css={imageTextHover} className="opacity">
              <div css={imageTextHoverText} className="translate">
                <span className="spanTop" />
                <h3>Porche 911</h3>
                <p>
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit.
                </p>
                <p>Only 190€ /day</p>
                <span className="spanBottom" />
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-offset="300" css={imageText}>
            <Image src={car7} alt="classic car" />
            <div css={imageTextHover} className="opacity">
              <div css={imageTextHoverText} className="translate">
                <span className="spanTop" />
                <h3>Chevrolet SS</h3>
                <p>
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit.
                </p>
                <p>Only 140€ /day</p>
                <span className="spanBottom" />
              </div>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-offset="300" css={imageText}>
            <Image src={car8} alt="classic car" />
            <div css={imageTextHover} className="opacity">
              <div css={imageTextHoverText} className="translate">
                <span className="spanTop" />
                <h3>Mercedes 300 SL</h3>
                <p>
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit.
                </p>
                <p>Only 230€ /day</p>
                <span className="spanBottom" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Latestcar;

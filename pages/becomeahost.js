import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import bg5 from '../public/pictures/bg5.jpeg';
import favlogo from '../public/pictures/VAV-LOGO.png';

const container = css`
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;
`;

const hostContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 75px;
  align-items: center;

  .centerHeader {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  h2 {
    font-size: 80px;
    font-weight: 600;
    letter-spacing: 3px;
    line-height: 90px;
  }
  p {
    margin: 0;
    color: #121214;
    margin-bottom: 32px;
    margin-top: 24px;
    font-size: 21px;
    font-weight: 900;
    letter-spacing: -0.2px;
    line-height: 28px;
    font-weight: 500;
  }

  .buttonWrapper {
    display: flex;
    align-items: center;
    gap: 50px;

    button {
      border: solid 2px #c59e47;
      font-size: 18px;
      padding: 10px;
      background: none;
      cursor: pointer;

      &:hover {
        background: #c59e47;
        color: #fff;
      }
    }
  }
`;

const mainHost = css`
  .bg5 {
    position: relative;
    height: 400px;
    margin-top: 50px;
  }

  .afterImgTextWrapper {
    display: flex;
    justify-content: center;
  }
  .afterImgText {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 700px;
    margin-top: 50px;
    line-height: 1.5;

    button {
      border: solid 2px #c59e47;
      font-size: 18px;
      padding: 10px;
      background: none;
      cursor: pointer;
      margin-top: 30px;

      &:hover {
        background: #c59e47;
        color: #fff;
      }
    }
  }
`;
const buildBusiness = css`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 50px;
    margin-bottom: 50px;
  }

  .businessContent {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px;
    gap: 50px;
    margin-right: 10%;
    margin-left: 10%;

    h4 {
      font-size: 28px;
      margin-bottom: 20px;
    }
  }
`;

function becomeahost(props) {
  return (
    <div>
      <Layout username={props.username}>
        <Head>
          <title>Become a host </title>
        </Head>
        <Navigation />
        <div css={container}>
          <div css={hostContainer}>
            <div className="centerHeader">
              <h2>
                Accelerate your <br /> entrepreneurship
              </h2>
              <p>
                Start building a small car sharing business with Oldie but
                goodie
              </p>
              <div className="buttonWrapper">
                <button>Get started</button>
                <p>Insurance Provider</p>
                <div>
                  <Image
                    src={favlogo}
                    width={200}
                    height={50}
                    alt="insurance provider name"
                  />
                </div>
              </div>
            </div>
          </div>
          <section css={mainHost}>
            <div className="bg5">
              <Image src={bg5} layout="fill" />
            </div>
            <div className="afterImgTextWrapper">
              <div className="afterImgText">
                <p>
                  Take control of your financial future while cultivating your
                  entrepreneurial fire with Oldie but goodie, the world’s
                  largest car sharing marketplace. <br /> <br /> Oldie but
                  goodie gives budding entrepreneurs the tools and resources
                  they need to build a small, successful portfolio of cars to
                  share on the marketplace, and the opportunity to add thousands
                  to their annual income. <br />
                  <br /> List your first car now to get started, then build your
                  business plan and scale how you want!
                </p>
                <button>Get started</button>
              </div>
            </div>
          </section>
          <section css={buildBusiness}>
            <h2>Build a business that’s...</h2>
            <div className="businessContent">
              <div>
                <h4>Scalable</h4>
                <p>
                  You choose how many cars to share, scaling your business up or
                  down however you want, and whether to reinvest your earnings
                  or cash out.
                </p>
              </div>
              <div>
                <h4>Accessible</h4>
                <p>
                  Start with a car you already own or buy one to share — any car
                  owner can start exercising their entrepreneurial muscles.
                </p>
              </div>
              <div>
                <h4>Flexible</h4>
                <p>
                  Whether you want to commit a lot of time or a little, you can
                  earn at home or on the go, on your schedule, and divest any
                  time.
                </p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
}

export default becomeahost;

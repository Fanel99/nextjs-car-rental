import { css } from '@emotion/react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
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

    @media (max-width: 1024px) {
      font-size: 35px;
      text-align: center;
      letter-spacing: 0.1px;
      line-height: 50px;
      margin-top: 50px;
    }
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
    @media (max-width: 1024px) {
      text-align: center;
    }
  }

  .buttonWrapper {
    display: flex;
    align-items: center;
    gap: 50px;
    @media (max-width: 1024px) {
      flex-direction: column;
      margin-top: 30px;
      gap: 25px;
    }

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
    @media (max-width: 1024px) {
      margin: 15px;
    }
  }

  .afterImgTextWrapper {
    display: flex;
    justify-content: center;
    @media (max-width: 1024px) {
      margin: 15px;
      text-align: center;
    }
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
    @media (max-width: 1024px) {
      text-align: center;
      font-size: 35px;
    }
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
    @media (max-width: 1024px) {
      flex-direction: column;
      padding: 0;
    }

    h4 {
      font-size: 28px;
      margin-bottom: 20px;
    }
  }
`;

const testimonialWrapper = css`
  .testimonials-section {
    background: #fff;
    height: 600px;
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .slider__nav {
    width: 12px;
    height: 12px;
    margin: 80px 12px;
    border-radius: 50%;
    z-index: 10;
    outline: 6px solid #ccc;
    outline-offset: -6px;
    box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .slider__nav:checked {
    -webkit-animation: check 0.4s linear forwards;
    animation: check 0.4s linear forwards;
  }
  .slider__nav:checked:nth-of-type(1) ~ .slider__inner {
    left: 0%;
  }
  .slider__nav:checked:nth-of-type(2) ~ .slider__inner {
    left: -100%;
  }
  .slider__nav:checked:nth-of-type(3) ~ .slider__inner {
    left: -200%;
  }
  .slider__nav:checked:nth-of-type(4) ~ .slider__inner {
    left: -300%;
  }
  .slider__nav:checked:nth-of-type(5) ~ .slider__inner {
    left: -400%;
  }
  .slider__inner {
    position: absolute;
    top: 80px;
    left: 0;
    width: 500%;
    height: auto;
    -webkit-transition: left 0.4s;
    transition: left 0.4s;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row nowrap;
    -ms-flex-flow: row nowrap;
    flex-flow: row nowrap;
  }
  .slider__contents {
    height: 100%;
    text-align: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-flex-flow: column nowrap;
    -ms-flex-flow: column nowrap;
    flex-flow: column nowrap;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .slider__caption {
    font-size: 14px;
    color: #111;
    opacity: 0.5;
    font-family: 'Roboto';
    font-weight: bold;
  }
  .slider__txt {
    font-size: 22px;
    font-weight: bold;
    font-family: 'Roboto';
    line-height: 1.7;
    color: #111;
    margin-top: -20px;
    margin-bottom: 20px;
    max-width: 750px;
  }
  quote {
    font-family: 'Arial';
    font-weight: bold;
    font-size: 100px;
    color: #ec2027;
    margin-bottom: 0;
  }

  @keyframes check {
    50% {
      outline-color: #333;
      box-shadow: 0 0 0 12px #333, 0 0 0 36px rgba(51, 51, 51, 0.2);
    }
    100% {
      outline-color: #333;
      box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);
    }
  }

  @keyframes check {
    50% {
      outline-color: #333;
      box-shadow: 0 0 0 12px #333, 0 0 0 36px rgba(51, 51, 51, 0.2);
    }
    100% {
      outline-color: #333;
      box-shadow: 0 0 0 0 #333, 0 0 0 0 rgba(51, 51, 51, 0);
    }
  }
`;

function Becomeahost(props) {
  const router = useRouter();
  return (
    <Layout username={props.username}>
      <Head>
        <title>Become a host </title>
      </Head>
      <Navigation user={props.user} />
      <div css={container}>
        <div css={hostContainer}>
          <div className="centerHeader">
            <h2>
              Accelerate your <br /> entrepreneurship
            </h2>
            <p>
              Start building a small car sharing business with Oldie but goodie
            </p>
            <div className="buttonWrapper">
              <button onClick={() => router.push('/host')}>Get started</button>
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
                entrepreneurial fire with Oldie but goodie, the world’s largest
                car sharing marketplace. <br /> <br /> Oldie but goodie gives
                budding entrepreneurs the tools and resources they need to build
                a small, successful portfolio of cars to share on the
                marketplace, and the opportunity to add thousands to their
                annual income. <br />
                <br /> List your first car now to get started, then build your
                business plan and scale how you want!
              </p>
              <button onClick={() => router.push('/host')}>Get started</button>
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
                down however you want, and whether to reinvest your earnings or
                cash out.
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
        <section css={testimonialWrapper}>
          <div class="testimonials-section">
            <input
              type="radio"
              name="slider"
              title="slide1"
              checked="checked"
              class="slider__nav"
            />
            <input
              type="radio"
              name="slider"
              title="slide2"
              class="slider__nav"
            />
            <input
              type="radio"
              name="slider"
              title="slide3"
              class="slider__nav"
            />
            <input
              type="radio"
              name="slider"
              title="slide4"
              class="slider__nav"
            />
            <input
              type="radio"
              name="slider"
              title="slide5"
              class="slider__nav"
            />
            <div class="slider__inner">
              <div class="slider__contents">
                <quote>&rdquo;</quote>
                <p class="slider__txt">
                  We love you guys. It's easy to order, we get shipments quick
                  and my rep solves tough problems the right way. We get answers
                  that work.
                </p>
                <h2 class="slider__caption">Rhonda | NylonCraft</h2>
              </div>
              <div class="slider__contents">
                <quote>&rdquo;</quote>
                <p class="slider__txt">
                  You all bend over backwards to get it done. Inside sales and
                  the Account Managers are great! It's your service...you all
                  know that it's not just about taking orders it's about
                  service. Why do we choose you guys - your people, your prices,
                  you're quick and you have a ton of technical knowledge.
                </p>
                <h2 class="slider__caption">Jared | Rexam</h2>
              </div>
              <div class="slider__contents">
                <quote>&rdquo;</quote>
                <p class="slider__txt">
                  It's the long-term relationship we have with Proheat that
                  keeps me calling you guys. I trust you, you're quick, and
                  everybody I've ever spoken to there are all great people. Our
                  CEO, Bill, talks about building relationships. That's exactly
                  what Proheat does, and I couldn't be happier.
                </p>
                <h2 class="slider__caption">Chris | C&M Fine Pack</h2>
              </div>
              <div class="slider__contents">
                <quote>&rdquo;</quote>
                <p class="slider__txt">
                  You answer my questions, always takes care of problems, and I
                  never have a hassle.
                </p>
                <h2 class="slider__caption">Rex | LNP Engineering Plastics</h2>
              </div>
              <div class="slider__contents">
                <quote>&rdquo;</quote>
                <p class="slider__txt">
                  Proheat's staff are all so friendly and everybody goes above
                  and beyond. Everyone is courteous, everything is quick and you
                  get us what we need. I have to shop around for everything and
                  we ALWAYS come back to Proheat.
                </p>
                <h2 class="slider__caption">Darlene | Russel Stover</h2>
              </div>
            </div>
          </div>
        </section>
        <div className="buttonWrapper">
          <button onClick={() => router.push('/host')}>Get started</button>
        </div>
      </div>
    </Layout>
  );
}

export default Becomeahost;

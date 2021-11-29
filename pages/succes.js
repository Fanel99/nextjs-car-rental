import { css } from '@emotion/react';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

const container = css`
  margin: 0 auto;
  width: 100%;

  .succes {
    background-image: url('/pictures/bg5.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
    text-align: center;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 42px;
  }
`;

function succes(props) {
  return (
    <div>
      <Layout username={props.username} />
      <Navigation />
      <div css={container}>
        <div className="succes">
          {' '}
          Order number 9210 placed! <br /> You will receive an email
          confirmation soon.
        </div>
      </div>
    </div>
  );
}

export default succes;

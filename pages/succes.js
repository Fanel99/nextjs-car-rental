import { css } from '@emotion/react';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';

const container = css`
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 150px;

  .succes {
    text-align: center;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
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
          Order placed! You will receive an email confirmation.
        </div>
      </div>
    </div>
  );
}

export default succes;

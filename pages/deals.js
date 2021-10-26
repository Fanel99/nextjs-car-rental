import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { css } from '@emotion/react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const container = css`
  max-width: 1366px;
  margin: 0 auto;
  width: 100%;
`;

const sectionDeals = css`
  .cards {
    margin-top: 200px;
    display: grid;
    grid-template-columns: 1fr 1fr 2fr;
    grid-gap: 20px;
    justify-content: center;
  }

  .card {
    height: 300px;
    width: 300px;
    border: 1px solid blue;
    text-align: center;
  }
  .mapDeals {
    border: 1px solid blue;
    width: 500px;
  }
`;

function Deals() {
  return (
    <div css={container}>
      <Header />
      <Navigation />
      <section css={sectionDeals}>
        <div className="cards">
          <div className="card"> card1</div>
          <div className="card">card2 </div>
          <div className="mapDeals"> map</div>
        </div>
      </section>
    </div>
  );
}

export default Deals;

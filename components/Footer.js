import { css } from '@emotion/react';
import Link from 'next/link';

const footer = css`
  background-color: #252525;
  color: #fff;
  padding-top: 50px;
`;

const containerFooter = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
  text-align: center;
  padding: 0 20px;
  h4 {
    margin-bottom: 20px;
    font-size: 25px;
  }
  @media (max-width: 1024px) {
    grid-template-columns: auto;
  }
  @media (max-width: 1024px) {
  }
`;

const firstDiv = css`
  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

const secondDiv = css`
  ul {
    text-decoration: none;
    list-style: none;

    li {
      margin-bottom: 10px;
      font-size: 18px;
    }

    a {
      color: #fff;
      text-decoration-line: none;

      &:hover {
        color: red;
      }
    }
  }
  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;

const thirdDiv = css`
  p {
    margin: 14px;
  }
  @media (max-width: 1024px) {
    margin-bottom: 20px;
  }
`;
const copyRight = css`
  text-align: center;
  margin-top: 50px;
  font-size: 18px;
  background: #383737;
  padding: 20px;
`;

export default function Footer() {
  return (
    <footer css={footer}>
      <div css={containerFooter}>
        <div data-aos="fade-left" css={firstDiv}>
          <h4>Oldie But Goodie</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam ad
            quo vel, neque enim magnam labore possimus reiciendis vero officiis
            eius incidunt saepe nam architecto iusto alias rem asperiores quia
          </p>
        </div>

        <div data-aos="fade-down" css={secondDiv}>
          <h4>Useful Link</h4>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/cars">
                <a>Deals</a>
              </Link>
            </li>

            <li>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>

        <div data-aos="fade-right" css={thirdDiv}>
          <h4>Contact</h4>
          <p>Adress: Wolfengasse 3, Vienna</p>
          <p>Phone: +43 1 515 23</p>
          <p>Email: office@google.at</p>
        </div>
      </div>
      <div css={copyRight}>©2021 Fanel Secara </div>
    </footer>
  );
}

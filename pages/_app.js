import { css, Global } from '@emotion/react';
import Head from 'next/head';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Oldie But Goodie</title>
        <meta property="og:title" content="Classic Rental Cars" key="title" />
        <html lang="en" />
      </Head>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Poppins', sans-serif;
          }
          a {
            text-decoration: none;
            color: #000;
          }
        `}
      />

      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

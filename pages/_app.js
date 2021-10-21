import { css, Global } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300&display=swap');
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Roboto', sans-serif;
          }
          a {
            text-decoration: none;
            color: #000;
          }
        `}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

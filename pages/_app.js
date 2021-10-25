import { css, Global } from '@emotion/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
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
    </>
  );
}

export default MyApp;

import { css, Global } from '@emotion/react';
import Head from 'next/head';
import { useCallback, useEffect, useState } from 'react';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState();

  const refreshUsername = useCallback(async () => {
    const response = await fetch('/api/profile');
    const profile = await response.json();

    console.log(profile);

    if ('errors' in profile) {
      console.log(profile.errors);
      return;
    }
    setUsername(profile.user.username);
  }, []);

  useEffect(() => {
    refreshUsername();
  }, []);

  return (
    <>
      <Head>
        <title>Oldie But Goodie</title>
        <meta content="Classic Rental Cars" key="title" />
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

      <Component
        {...pageProps}
        username={username}
        refreshUsername={refreshUsername}
      />
      <Footer />
    </>
  );
}

export default MyApp;

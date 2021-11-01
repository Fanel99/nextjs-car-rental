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
    setUsername(profile.user?.username);
  }, []);

  useEffect(() => {
    refreshUsername();
  }, [refreshUsername]); // need to search for a solution for  my  refresh problem

  return (
    <>
      <Head>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>Oldie but goodie</title>
        <link rel="icon" href="/favicon.ico" />
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

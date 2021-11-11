import ProgressBar from '@badrap/bar-of-progress';
import { css, Global } from '@emotion/react';
import Head from 'next/head';
import { Router, useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Footer from '../components/Footer';

// create the progress bar
const progress = new ProgressBar({
  size: 4,
  color: '#c59e47',
  className: 'z-50',
  delay: 150,
});

// detectd when router change and action the progress bar

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState();
  const router = useRouter();

  const refreshUsername = useCallback(async () => {
    const response = await fetch('/api/profile');
    const profile = await response.json();

    // console.log(profile);

    if ('errors' in profile) {
      setUsername(undefined);
      // console.log(profile.errors);
      return;
    }
    setUsername(profile.user.username);
  }, []);

  useEffect(() => {
    refreshUsername();
  }, [refreshUsername, router.pathname]);

  return (
    <>
      <Head>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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

import 'aos/dist/aos.css';
import AOS from 'aos';
import Head from 'next/head';
import { useEffect } from 'react';
import CookieConsent from 'react-cookie-consent';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Latestcar from '../components/Latestcar';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Newsletter from '../components/Newsletter';

export default function Home(props) {
  const { user } = props;
  console.log('from index.js', user);

  useEffect(() => {
    props.refreshUsername();
    AOS.init({
      //  once: true,
      easing: 'ease-in-sine',
      disable: 'mobile',
      offset: 250,
    });
    AOS.refresh();
  }, []);

  return (
    <Layout username={props.username}>
      <main>
        <Head>
          <title>Home | Oldie but goodie</title>
        </Head>
        <Navigation user={props.user} />
        <Hero />
        <Features />
        <Latestcar />
        <Newsletter />
        <CookieConsent
          debug={true}
          expires={2}
          style={{ background: '##FFFFF7', textAlign: 'center' }}
          buttonStyle={{ color: 'blue', background: '', fontSize: '14px' }}
          buttonText="Sure!"
        >
          This site uses cookies
        </CookieConsent>
      </main>
    </Layout>
  );
}

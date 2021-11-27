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
  useEffect(() => {
    props.refreshUsername();
    AOS.init({
      //  once: true,
      easing: 'ease-in-sine',
      offset: 250,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  return (
    <Layout username={props.username}>
      <main>
        <Head>
          <title>Home | Oldie but goodie</title>
        </Head>
        <Navigation />
        <Hero />
        <Features />
        <Latestcar />
        <Newsletter />
        {/* <CookieConsent
          debug={true}
          expires={1}
          style={{ background: '#000', textAlign: 'center' }}
          buttonStyle={{
            color: '#000',
            background: '',
            fontSize: '14px',
          }}
          buttonText="Allow all"
        >
          This website uses cookies We use cookies to personalise content and
          ads, to provide social media features and to analyse our traffic.
        </CookieConsent> */}
      </main>
    </Layout>
  );
}

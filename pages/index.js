import 'aos/dist/aos.css';
import AOS from 'aos';
import Head from 'next/head';
import React, { useEffect } from 'react';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Latestcar from '../components/Latestcar';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Newsletter from '../components/Newsletter';

export default function Home(props) {
  useEffect(() => {
    AOS.init({
      //  once: true,
      easing: 'ease-in-sine',
      disable: 'mobile',
      offset: 250,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Head>
        <title>Home | Oldie but goodie</title>
      </Head>
      <Layout username={props.username}>
        <Navigation />
        <Hero />
        <Features />
        <Latestcar />
        <Newsletter />
      </Layout>
    </main>
  );
}

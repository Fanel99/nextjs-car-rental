import Head from 'next/head';
import Features from '../components/Features';
import Hero from '../components/Hero';
import Latestcar from '../components/Latestcar';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Newsletter from '../components/Newsletter';

export default function Home(props) {
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

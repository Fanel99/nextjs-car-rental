import Features from '../components/Features';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Latestcar from '../components/Latestcar';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import Newsletter from '../components/Newsletter';

const greeting = 'Hello';

export default function Home() {
  return (
    <main>
      <Layout greeting={greeting}>
        <Header />
        <Navigation />
        <Hero />
        <Features />
        <Latestcar />
        <Newsletter />
      </Layout>
    </main>
  );
}

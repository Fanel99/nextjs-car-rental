import Features from '../components/Features';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Latestcar from '../components/Latestcar';
import Navigation from '../components/Navigation';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <div>
      <Header />
      <Navigation />
      <Hero />
      <Features />
      <Latestcar />
      <Newsletter />
    </div>
  );
}

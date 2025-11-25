import './App.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);
import CustomCursor from './Components/CustomCursor'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import WorkSection from './Components/WorkSection'
import Carousel from './Components/Carousel'
import AboutSection from './Components/AboutSection'
import VerticalScroll from './Components/VerticalScroll'
import Footer from './Components/Footer'

function App() {

  useGSAP(() => {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  });

  return (
    <>
      <CustomCursor />
      <Navbar />
      <HomePage />
      <WorkSection />
      <Carousel />
      <AboutSection />
      <VerticalScroll />
      <Footer />
    </>
  )
}

export default App
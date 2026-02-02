import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  return (
    <>
      {/* Auto Sliding Images */}
      <ImageSlider />

      <Hero />
      <About />
      <Services />
      <Stats />
      <Gallery />
      <Testimonials />
      <FAQ />
    </>
  );
}

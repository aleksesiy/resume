import { useReveal } from "./components/useReveal";
import About from "./sections/About";
import Contact from "./sections/Contact";
import FaqSection from "./sections/FaqSection";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Process from "./sections/Process";
import Reviews from "./sections/Reviews";
import Services from "./sections/Services";
import Works from "./sections/Works";

function App() {
  useReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works />
        <Reviews />
        <Services />
        <Process />
        <About />
        <FaqSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

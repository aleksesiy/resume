import About from "./sections/About";
import Facts from "./sections/Facts";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Philosophy from "./sections/Philosophy";
import Process from "./sections/Process";
// import Projects from "./sections/Projects";
// import Services from "./sections/Services";
import Solutions from "./sections/Solutions";

function App() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Process />
      <Facts />
      {/* <Projects /> */}
      {/* <Services /> */}
      <Solutions />
      <About />
      <Footer />
    </>
  );
}

export default App;

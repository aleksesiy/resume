import Reveal from "./components/Reveal";
import About from "./sections/About";
// import Facts from "./sections/Facts";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import NewSolution from "./sections/NewSolution";
import Philosophy from "./sections/Philosophy";
import Process from "./sections/Process";
// import Projects from "./sections/Projects";
// import Services from "./sections/Services";
import Solutions from "./sections/Solutions";

function App() {
  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>
      <Philosophy />
      <Process />
      {/* <Facts /> */}
      {/* <Projects /> */}
      {/* <Services /> */}
      <Solutions />
      <NewSolution />
      <About />
      <Footer />
    </>
  );
}

export default App;

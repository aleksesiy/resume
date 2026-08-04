import { useEffect, useRef } from "react";
import Typed from "typed.js";
import ScrollHint from "../components/ScrollHint";

const Hero = () => {
  // Create a reference to store the DOM element
  const el = useRef(null);

  useEffect(() => {
    // Initialize Typed.js on the referenced element
    const typed = new Typed(el.current, {
      strings: ["вам", "вашему бизнесу", "вашему бренду"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 3000,
      loop: true,
      smartBackspace: true,
    });

    // Critical: Destroy Typed instance on unmount to prevent memory leaks
    return () => {
      typed.destroy();
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <section className="section relative">
      <div className="mt-30">
        <h1 className="text-center">
          Единственный <br />
          разработчик, который <br />
          нужен <span ref={el} />
        </h1>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-7">
        <ScrollHint
          onClick={() =>
            document
              .getElementById("philosophy")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
    </section>
  );
};

export default Hero;

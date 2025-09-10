import styles from "./App.module.css";
import "./animations.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { WhatDrivesMe } from "./components/WhatDrivesMe/WhatDrivesMe";
import { BeyondCode } from "./components/BeyondCode/BeyondCode";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import Aurora from "./components/Aurora/Aurora";
import { useEffect } from "react";
import { initScrollAnimations } from "./utils/animations";

function App() {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    
    // Cleanup on unmount for performance
    return () => {
      if (cleanup) cleanup();
    };
  }, []);
  return (
    <div className={styles.App}>
      <div className={styles.auroraBackground}>
        <Aurora
          colorStops={["#00ff88", "#00ffff", "#0080ff", "#8000ff", "#ff00ff", "#00ff44"]}
          blend={0.7}
          amplitude={1.1}
          speed={0.4}
        />
      </div>
      <Navbar />
      <Hero />
      <About />
      <WhatDrivesMe />
      <BeyondCode />
      <Experience/>
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;

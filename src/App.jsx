import React, { useRef, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MyWork from "./components/MyWork/MyWork";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const App = () => {
  const sections = useRef([]);
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (index) => {
    setCurrentSection(index);
    sections.current[index].scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar />
      <main>
        <Home
          sections={sections}
          currentSection={currentSection}
          scrollToSection={scrollToSection}
        />
        <About sections={sections} />
        <Skills sections={sections} />
        <MyWork sections={sections} />
        <Contact sections={sections} />
      </main>
      <Footer />
    </>
  );
};
export default App;

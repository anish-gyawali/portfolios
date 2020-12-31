import React, { useState } from "react";
import FirstSection from "../components/FirstSection";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { homeObjectOne } from "../components/InfoSection/data";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <FirstSection />
      <InfoSection {...homeObjectOne} />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;

import React, { useState } from "react";
import FirstSection from "../components/FirstSection";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { homeObjectOne } from "../components/InfoSection/data";
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
    </>
  );
};

export default Home;

"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

type StackCategory = "frontend" | "backend" | "databases" | "cloud";

const LandingPage: React.FC = () => {
  const [selectedStack, setSelectedStack] = useState<StackCategory>("frontend");

  const stacks = {
    frontend: ["React", "NextJs", "Angular", "Ionic"],
    backend: ["Node.js", "C#", "Java", "ASP.NET", "Spring Boot"],
    databases: ["SQL Server", "MongoDB", "Oracle", "Sybase"],
    cloud: ["Azure", "AWS", "Docker", "Kubernetes"],
  };

  const getStackIcons = (stack: StackCategory) => {
    switch (stack) {
      case "frontend":
        return [
          <img
            src="https://cdn.simpleicons.org/react/61DAFB"
            alt="React Logo"
            className="w-10 h-10"
          />,
          <img
            src="https://img.icons8.com/fluent-systems-filled/512/FFFFFF/nextjs.png"
            alt="Next.js Logo"
            className="w-10 h-10"
          />,
          <img
            src="https://cdn.simpleicons.org/angular/DD0031"
            alt="Angular Logo"
            className="w-10 h-10"
          />,
          <img
            src="https://cdn.simpleicons.org/ionic/3880D3"
            alt="Ionic Logo"
            className="w-10 h-10"
          />,
        ];
      case "backend":
        return [
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png"
            alt="Node.js Logo"
            className="w-10 h-10"
          />,
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png?20180210215736"
            alt="C# Logo"
            className="w-10 h-10"
          />,
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png"
            alt="Java Logo"
            className="w-10 h-10"
          />,
          <img
            src="https://www.ispirer.net/images/asp.net.logo.png"
            alt="ASP.NET Logo"
            className="w-10 h-10"
          />,
          <img
            src="https://cdn.simpleicons.org/spring/6DB33F"
            alt="Spring Boot Logo"
            className="w-10 h-10"
          />,
        ];
      case "databases":
        return [
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968364.png"
            alt="SQL server Logo"
            className="w-10 h-10"
          />,
          <img
            src="https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png"
            alt="MongoDB Logo"
            className="w-10 h-10"
          />,
          <img
            src="https://cdn.simpleicons.org/oracle/FF0000"
            alt="Oracle Logo"
            className="w-10 h-10"
          />,
          <img
            src="https://w7.pngwing.com/pngs/785/736/png-transparent-sybase-hd-logo.png"
            alt="Sybase Logo"
            className="w-10 h-10"
          />,
        ];
      case "cloud":
        return [
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1280px-Microsoft_Azure_Logo.svg.png"
            alt="Azure Logo"
            className="w-10 h-10"
          />,
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png"
            alt="AWS Logo"
            className="w-10 h-10"
          />,
          <img
            src="https://cdn.simpleicons.org/docker/2496ED"
            alt="Docker Logo"
            className="w-10 h-10"
          />,
          <img
            src="https://cdn.simpleicons.org/kubernetes/326CE5"
            alt="Kubernetes Logo"
            className="w-10 h-10"
          />,
        ];
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-primary text-accent flex flex-col items-center px-4 py-28 sm:py-16">
      {/* Hero Section */}
      <section className="text-center mb-16 max-w-3xl mx-auto">
        <motion.h1
          className="text-5xl sm:text-6xl font-bold mb-4 text-highlight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Anish Gyawali
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl font-light mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          A passionate Full Stack Developer, Problem Solver, and Tech
          Enthusiast.
        </motion.p>
        <motion.div
          className="flex justify-center gap-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.8 }}
        >
          <a
            href="https://www.linkedin.com/in/anish-gyawali/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-4xl hover:text-highlight transition-colors" />
          </a>
          <a
            href="https://github.com/anish-gyawali"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-4xl hover:text-highlight transition-colors" />
          </a>
        </motion.div>
        <Link href="#about" passHref>
          <motion.button
            className="px-8 py-4 bg-highlight text-secondary font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
        </Link>
      </section>

      {/* Interactive Tech Stack Showcase */}
      <section className="w-full max-w-3xl text-center mb-12 sm:mb-16">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold text-highlight mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          My Expertise
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {Object.keys(stacks).map((category) => (
            <button
              key={category}
              className={`px-4 py-2 sm:px-6 sm:py-3 bg-secondary text-highlight rounded-lg shadow-lg hover:scale-105 ${
                selectedStack === category ? "bg-highlight text-accent" : ""
              }`}
              onClick={() => setSelectedStack(category as StackCategory)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {stacks[selectedStack].map((stack, index) => (
            <motion.div
              key={index}
              className="text-center bg-secondary p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transition-transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-5xl mb-4 text-highlight">
                {getStackIcons(selectedStack)[index]}
              </div>
              <h3 className="text-xl font-semibold mb-2">{stack}</h3>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Animated Call to Action */}
      <motion.section
        className="text-center w-full max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-highlight">
          Ready to Build the Future?
        </h2>
        <p className="text-lg font-light mb-6">
          Let's collaborate to create amazing software that makes an impact.
          Whether it's web development, cloud technologies, or problem-solving,
          I'm ready to take on new challenges.
        </p>
        <Link href="/about" passHref>
          <motion.button
            className="px-8 py-4 bg-highlight text-secondary font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Me
          </motion.button>
        </Link>
      </motion.section>

      {/* Download Resume Section */}
      <section className="mt-16 text-center">
        <Link href="/anish_re.pdf" passHref>
          <motion.button
            className="px-8 py-4 bg-secondary text-highlight font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="inline mr-2" /> Download My Resume
          </motion.button>
        </Link>
      </section>
    </div>
  );
};

export default LandingPage;

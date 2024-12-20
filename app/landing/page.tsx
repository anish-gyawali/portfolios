"use client";
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

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
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"
            alt="React Logo"
            width={40}
            height={40}
            className="w-auto h-auto"
          />,
          <Image
            src="https://img.icons8.com/fluent-systems-filled/512/FFFFFF/nextjs.png"
            alt="Next.js Logo"
            width={40}
            height={40}
            className="w-auto h-auto"
          />,
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png"
            alt="Angular Logo"
            width={40}
            height={40}
            className="w-auto h-auto"
          />,
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ionic-logo-landscape.svg/640px-Ionic-logo-landscape.svg.png"
            alt="Ionic Logo"
            width={40}
            height={40}
            className="w-auto h-auto"
          />,
        ];
      case "backend":
        return [
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/640px-Node.js_logo.svg.png"
            alt="Node.js Logo"
            width={40}
            height={40}
            className="w-auto h-auto"
          />,
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png?20180210215736"
            alt="C# Logo"
            width={40}
            height={40}
            className="w-auto h-auto"
          />,
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/800px-Java_programming_language_logo.svg.png"
            alt="Java Logo"
            width={40}
            height={40}
            className="w-auto h-auto"
          />,
          <Image
            src="https://www.ispirer.net/images/asp.net.logo.png"
            alt="ASP.NET Logo"
            width={40}
            height={40}
            className="w-auto h-auto"
          />,
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Spring_boot.jpg/640px-Spring_boot.jpg"
            alt="Spring Boot Logo"
            width={40}
            height={40}
            className="w-auto h-auto"
          />,
        ];
      case "databases":
        return [
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/69/Microsoft_SQL_Server_Logo.png?20080623103336"
            alt="SQL server Logo"
            width={40}
            height={40}
            className="w-auto h-auto"
          />,
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Mongodb-svgrepo-com.svg/640px-Mongodb-svgrepo-com.svg.png"
            alt="MongoDB Logo"
            width={40}
            height={40}
            className="w-auto h-auto"
          />,
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/640px-Oracle_logo.svg.png"
            alt="Oracle Logo"
            width={40}
            height={40}
            className="w-auto h-auto"
          />,
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Sybase_logo_full.svg/640px-Sybase_logo_full.svg.png"
            alt="Sybase Logo"
            width={40}
            height={40}
            className="w-auto h-auto"
          />,
        ];
      case "cloud":
        return [
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1280px-Microsoft_Azure_Logo.svg.png"
            alt="Azure Logo"
            className="w-auto h-auto"
            width={40}
            height={40}
          />,
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png"
            alt="AWS Logo"
            className="w-auto h-auto"
            width={40}
            height={40}
          />,
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Docker-svgrepo-com.svg/640px-Docker-svgrepo-com.svg.png"
            alt="Docker Logo"
            className="w-auto h-auto"
            width={40}
            height={40}
          />,
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/640px-Kubernetes_logo_without_workmark.svg.png"
            alt="Kubernetes Logo"
            className="w-auto h-auto"
            width={40}
            height={40}
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
          {"Hi, I'm Anish Gyawali"}
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl font-light mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          {
            "A passionate Full Stack Developer, Problem Solver, and Tech Enthusiast."
          }
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
          Let&apos;s collaborate to create amazing software that makes an
          impact. Whether it&apos;s web development, cloud technologies, or
          problem-solving, I&apos;m ready to take on new challenges.
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

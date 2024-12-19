import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-accent py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">
          © {new Date().getFullYear()} Anish Gyawali. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://linkedin.com/in/anish-gyawali"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl hover:text-highlight transition-all duration-300 ease-in-out transform hover:scale-110" />
          </a>
          <a
            href="https://github.com/anish-gyawali"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl hover:text-highlight transition-all duration-300 ease-in-out transform hover:scale-110" />
          </a>
        </div>
        <div className="mt-4 text-sm">
          <p>
            Email:{" "}
            <a
              href="mailto:anish.gyawali10@gmail.com"
              className="hover:text-highlight transition-all duration-300 ease-in-out"
            >
              anish.gyawali10@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+13467757412"
              className="hover:text-highlight transition-all duration-300 ease-in-out"
            >
              346-775-7412
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

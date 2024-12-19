"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-accent p-4 fixed w-full z-10 shadow-lg transition-all duration-500 ease-in-out">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref>
          <h1 className="text-2xl font-extrabold text-accent italic tracking-wide cursor-pointer hover:scale-105 transition-transform duration-300">
            Anish Gyawali
          </h1>
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="hover:text-highlight transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="hover:text-highlight transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="hover:text-highlight transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <a
            href="https://linkedin.com/in/anish-gyawali"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl hover:text-highlight transition-all duration-300 ease-in-out transform hover:scale-105" />
          </a>
          <a
            href="https://github.com/anish-gyawali"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl hover:text-highlight transition-all duration-300 ease-in-out transform hover:scale-105" />
          </a>
        </div>
        <button
          className="md:hidden text-xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-secondary mt-2 p-4 rounded-md transition-all duration-300 ease-in-out transform opacity-1 animate-fadeIn animate-delay-200ms">
          <Link
            href="/"
            className="block py-2 hover:text-highlight transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Home
          </Link>
          <Link
            href="/blog"
            className="block py-2 hover:text-highlight transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="block py-2 hover:text-highlight transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            About
          </Link>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://linkedin.com/in/anish-gyawali"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl hover:text-highlight transition-all duration-300 ease-in-out transform hover:scale-105" />
            </a>
            <a
              href="https://github.com/anish-gyawali"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl hover:text-highlight transition-all duration-300 ease-in-out transform hover:scale-105" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

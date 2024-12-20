"use client";
import React from "react";
import Link from "next/link";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary text-accent py-16 px-12">
      {/* About Me Section */}
      <section className="max-w-5xl mx-auto text-center mb-12">
        <motion.h1
          className="text-4xl font-bold text-highlight mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h1>
        <motion.p
          className="text-xl font-light mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          I&apos;m a passionate Full Stack Developer with expertise in creating
          high-quality web applications, cloud-based solutions, and databases.
          With a strong focus on continuous learning and growth, I aim to
          deliver impactful solutions in every project I undertake.
        </motion.p>
      </section>

      {/* Founder Section */}
      <section className="max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          className="text-3xl font-semibold text-highlight mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Founder of Billora Tech
        </motion.h2>
        <motion.p
          className="text-lg font-light mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          {"I am the founder of "}
          <a
            href="https://www.linkedin.com/company/billora/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-highlight underline hover:text-secondary"
          >
            Billora Tech
          </a>
          {", a technology services startup dedicated to delivering innovative solutions."}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          <a
            href="https://www.linkedin.com/company/billora/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-highlight text-secondary font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform inline-flex items-center"
          >
            Visit Billora Tech <FaExternalLinkAlt className="ml-2" />
          </a>
        </motion.div>
      </section>

      {/* Work Experience Timeline */}
      <section className="max-w-4xl mx-auto mb-16">
        <motion.h2
          className="text-3xl font-semibold text-highlight mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          My Career Timeline
        </motion.h2>
        <div className="relative border-l-4 border-highlight">
          {[
            {
              title: ".NET Developer",
              company: "DXC Technology(eLabs)",
              date: "May 2022 - Present",
              location: "New Orleans, LA",
              description: [
                "Led migration of legacy applications to modern platforms.",
                "Guided and mentored team members throughout the development lifecycle.",
                "Deployed Windows services and web services within Windows Server environments.",
              ],
            },
            {
              title: "Jr. .NET Developer",
              company: "Anheuser-Busch",
              date: "Mar 2022 - Apr 2022",
              location: "St. Louis, MO",
              description: [
                "Provided escalated application support for breweries.",
                "Collaborated on database management and maintenance.",
                "Developed solutions to optimize manufacturing processes.",
              ],
            },
            {
              title: "Application Developer",
              company: "DXC Technology",
              date: "Jan 2022 - May 2022",
              location: "New Orleans, LA",
              description: [
                "Developed UI components using Angular.",
                "Implemented Azure Cognitive Services for a talent research project.",
                "Created technical documentation and utilized Azure Databricks for data wrangling.",
              ],
            },
            {
              title: "Software Developer",
              company: "SilverBay Consulting LLC",
              date: "May 2021 - Aug 2021",
              location: "Houston, TX",
              description: [
                "Designed and developed a user interface for a public web application.",
                "Contributed to bug fixes and new features using ASP.NET and Angular.",
                "Utilized Azure CI/CD pipelines for code integration and deployment.",
              ],
            },
          ].map((role, index) => (
            <motion.div
              key={index}
              className="mb-10 ml-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.3 }}
            >
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-highlight text-secondary rounded-full">
                {index + 1}
              </span>
              <h3 className="text-2xl font-semibold">{role.title}</h3>
              <p className="text-lg font-light">
                {role.company} | {role.date} | {role.location}
              </p>
              <ul className="list-disc pl-6 text-lg mt-2">
                {role.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="max-w-4xl mx-auto mb-16">
        <motion.h2
          className="text-3xl font-semibold text-highlight mb-6 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          Certifications
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
        >
          {[
            {
              name: "Azure Fundamentals (AZ-900)",
              date: "December 2022",
              issuer: "Microsoft",
            },
            {
              name: "Azure Data Fundamentals (DP-900)",
              date: "February 2023",
              issuer: "Microsoft",
            },
            {
              name: "Azure AI Fundamentals (AI-900)",
              date: "November 2024",
              issuer: "Microsoft",
            },
          ].map((cert, index) => (
            <div
              key={index}
              className="p-6 bg-secondary rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold text-highlight mb-2">
                {cert.name}
              </h3>
              <p className="text-lg font-light">
                {cert.date} | {cert.issuer}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Download Resume */}
      <section className="text-center">
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

export default AboutPage;

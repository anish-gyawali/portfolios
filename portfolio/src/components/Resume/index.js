import React from "react";
import { ResumeConatiner, ResumeH1 } from "./ResumeElements";

const Resume = () => {
  return (
    <>
      <ResumeConatiner id="resume">
        <ResumeH1>Resume</ResumeH1>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vSh81g7jloip200fLG3DQH3t-RHMEneDhfwPWl7BNPRZHpKQFQ_etBczt2aSldFc53bU8yNVurG_b-3/pub"
          title="file"
          width="100%"
          height="600"
        ></iframe>
      </ResumeConatiner>
    </>
  );
};

export default Resume;

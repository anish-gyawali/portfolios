import React from "react";
import { ResumeConatiner, ResumeH1 } from "./ResumeElements";

const Resume = () => {
  return (
    <>
      <ResumeConatiner id="resume">
        <ResumeH1>Resume</ResumeH1>
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vRHbbqB4RYTW1HskqF2TmSM9RUa8G48ZsKHLgZdJrihrqS_XgET5_3RQtQrNcdsog/pub?embedded=true"
          title="file"
          width="100%"
          height="600"
        ></iframe>
      </ResumeConatiner>
    </>
  );
};

export default Resume;

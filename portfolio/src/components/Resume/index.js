import React from "react";
import Anish from "../../images/Anish.PNG";
import { ResumeConatiner, ResumeWrapper, ImgWrap, Img } from "./ResumeElements";

const Resume = () => {
  return (
    <>
      <ResumeConatiner id="resume">
        <ResumeWrapper>
          <ImgWrap>
            <Img src={Anish} />
          </ImgWrap>
        </ResumeWrapper>
      </ResumeConatiner>
    </>
  );
};

export default Resume;

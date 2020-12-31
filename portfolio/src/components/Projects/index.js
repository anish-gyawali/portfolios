import React from "react";
import Media1 from "../../videos/Media1.mp4";
import Media2 from "../../videos/Media2.mp4";
import Media3 from "../../videos/Media3.mp4";
import Media4 from "../../videos/Media4.mp4";
import Media5 from "../../videos/Media5.mp4";
import Media6 from "../../videos/Media6.mp4";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
} from "./ProjectsElements";

const Projects = () => {
  return (
    <>
      <ProjectsContainer id="projects">
        <ProjectsH1>Recent Projects</ProjectsH1>
        <ProjectsWrapper>
          <ProjectsCard>
            <ProjectsIcon autoPlay loop muted src={Media5} type="video/mp4" />
            <ProjectsH2>SchoolOmeter</ProjectsH2>
            <ProjectsP>
              Web application to keep record of temperature to prevent student
              from COVID-19
            </ProjectsP>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon autoPlay loop muted src={Media6} type="video/mp4" />
            <ProjectsH2>SchoolOmeter</ProjectsH2>
            <ProjectsP>
              Mobile application to scan user id and record of temperature to
              prevent student from COVID-19
            </ProjectsP>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon autoPlay loop muted src={Media4} type="video/mp4" />
            <ProjectsH2>Antsy Freelancer</ProjectsH2>
            <ProjectsP>
              Web application to expand job opportunites by providing Job
              platform for freelancer worker based on their Skills.
            </ProjectsP>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon autoPlay loop muted src={Media3} type="video/mp4" />
            <ProjectsH2>Amazon-clone</ProjectsH2>
            <ProjectsP>
              Amazon-Clone using react-redux and firebase for authentication and
              stripe to verify card and checkout payment.
            </ProjectsP>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon autoPlay loop muted src={Media2} type="video/mp4" />
            <ProjectsH2>Face-Detector</ProjectsH2>
            <ProjectsP>
              Face-Detector which detects multi people faces using camera and
              also detect using images or videos.
            </ProjectsP>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon autoPlay loop muted src={Media1} type="video/mp4" />
            <ProjectsH2>L.M sytem</ProjectsH2>
            <ProjectsP>
              Developed application using Java swing that works for library
              purpose where people can borrow book and return book quickly.
            </ProjectsP>
          </ProjectsCard>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;

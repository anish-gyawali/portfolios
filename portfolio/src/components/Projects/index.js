import React from "react";
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
            <ProjectsIcon src={"Icon1"} />
            <ProjectsH2>SchoolOmeter</ProjectsH2>
            <ProjectsP>
              Web application to keep record of temperature to prevent student
              from COVID-19
            </ProjectsP>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={"Icon2"} />
            <ProjectsH2>SchoolOmeter</ProjectsH2>
            <ProjectsP>
              Mobile application to scan user id and record of temperature to
              prevent student from COVID-19
            </ProjectsP>
          </ProjectsCard>
          <ProjectsCard>
            <ProjectsIcon src={"Icon3"} />
            <ProjectsH2>Antsy Freelancer</ProjectsH2>
            <ProjectsP>
              Web application to expand job opportunites by providing Job
              platform for freelancer worker based on their Skills.
            </ProjectsP>
          </ProjectsCard>
        </ProjectsWrapper>
      </ProjectsContainer>
    </>
  );
};

export default Projects;

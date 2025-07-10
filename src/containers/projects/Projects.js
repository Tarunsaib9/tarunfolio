// src/containers/project/Projects.js
import React, {useContext} from "react";
import "./Projects.scss"; // ← keep or create a simple wrapper if missing
import {bigProjects} from "../../portfolio"; // ← array defined in portfolio.js
import ProjectCard from "../../components/projectCard/ProjectCard";

import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const {isDark} = useContext(StyleContext);

  // If you don’t want this section to show, set display:false in portfolio.js
  if (!bigProjects || bigProjects.length === 0) return null;

  return (
    <div className="main" id="projects">
      <Fade bottom duration={1000} distance="40px">
        <div className="projects-heading-div">
          <h1
            className={isDark ? "dark-mode project-heading" : "project-heading"}
          >
            Projects
          </h1>
          {/* Optional subtitle */}
          <p
            className={
              isDark ? "dark-mode project-subtitle" : "project-subtitle"
            }
          >
            A few highlighted works
          </p>
        </div>

        <div className="project-cards-div">
          {bigProjects.map((project, idx) => (
            <ProjectCard key={idx} isDark={isDark} project={project} />
          ))}
        </div>
      </Fade>
    </div>
  );
}

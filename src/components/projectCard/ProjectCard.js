// src/components/projectCard/ProjectCard.js
import React from "react";
import "./ProjectCard.scss";

export default function ProjectCard({project, isDark}) {
  if (!project) return null;

  const {
    image = "",
    projectName = "Project",
    projectDesc = "",
    footerLinks = []
  } = project;

  /* ---- Safe image resolve ---- */
  let imgSrc;
  try {
    imgSrc =
      typeof image === "string"
        ? require(`../../assets/images/${image}`)
        : image;
  } catch (e) {
    // fallback if image not found
    imgSrc = require("../../assets/images/placeholder.png");
  }

  return (
    <div className={isDark ? "project-card dark-mode" : "project-card"}>
      {/* Left logo / image */}
      <img src={imgSrc} alt={projectName} className="project-image" />

      {/* Right details */}
      <div className="project-details">
        <h5 className="project-title">{projectName}</h5>
        <div className="project-desc">{projectDesc}</div>

        {/* Footer links (e.g. GitHub) */}
        <div className="project-links">
          {footerLinks.map(({name, url}, idx) => (
            <a key={idx} href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

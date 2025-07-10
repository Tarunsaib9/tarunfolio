// ────────────────────────────────────────────────────────────────
//  WorkExperience.js  ▸  Renders experience cards in a 3-column grid
// ────────────────────────────────────────────────────────────────
import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./WorkExperience.scss";

import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);

  // ─── Guard ────────────────────────────────────────────────────
  if (!workExperiences?.display) return null;

  return (
    <section id="experience" className="experience-section">
      <Fade bottom duration={1000} distance="20px">
        <h1 className="experience-heading">Experiences</h1>

        <div className="experience-grid">
          {workExperiences.experience.map((exp, index) => (
            <ExperienceCard
              key={index}
              isDark={isDark}
              cardInfo={exp} // pass through the experience object
            />
          ))}
        </div>
      </Fade>
    </section>
  );
}

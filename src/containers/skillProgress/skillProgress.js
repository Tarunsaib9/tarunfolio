// src/containers/skillProgress/skillProgress.js
import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import proficiencyAnim from "../../assets/lottie/proficiency.json";

export default function StackProgress() {
  // If the user turned the skill bars off in portfolio.js, render nothing
  if (!techStack.viewSkillBars) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="skills-container">
        {/* ---------- Skill Bars ---------- */}
        <div className="skills-bar">
          <h1 className="skills-heading">Proficiency</h1>

          {techStack.experience.map((exp, i) => (
            <div key={i} className="skill">
              <p>{exp.Stack}</p>
              <div className="meter">
                <span style={{width: exp.progressPercentage}}></span>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- Animation or static image ---------- */}
        <div className="skills-image">
          {illustration.animated ? (
            <div style={{width: "100%", height: "240px"}}>
              <DisplayLottie animationData={proficiencyAnim} />
            </div>
          ) : (
            <img alt="Skills" src={require("../../assets/images/skill.svg")} />
          )}
        </div>
      </div>
    </Fade>
  );
}

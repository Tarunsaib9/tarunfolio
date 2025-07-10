import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  achievementSection,
  blogSection,
  talkSection
} from "../../portfolio";

export default function Header() {
  const {isDark} = useContext(StyleContext);

  const viewSkills = skillsSection.display;
  const viewExperience = workExperiences.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        {/* ---------- Logo / Name ---------- */}
        <a href="/" className="logo">
          <span className="grey-color">&lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>

        {/* ---------- Mobile toggle ---------- */}
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className={isDark ? "navicon navicon-dark" : "navicon"} />
        </label>

        {/* ---------- Nav list ---------- */}
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">Skills</a>
            </li>
          )}

          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}

          {viewAchievement && (
            <li>
              <a href="#achievements">Achievements</a>
            </li>
          )}

          {viewBlog && (
            <li>
              <a href="#blogs">Blogs</a>
            </li>
          )}

          {viewTalks && (
            <li>
              <a href="#talks">Talks</a>
            </li>
          )}

          <li>
            <a href="#contact">Contact Me</a>
          </li>

          {/* Dark / light toggle */}
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

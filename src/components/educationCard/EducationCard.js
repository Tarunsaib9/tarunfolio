import React from "react";
import "./EducationCard.scss";

/**
 * Card that renders **one** school.
 * Receives exactly one prop:
 *   { school: { logo, schoolName, subHeader, desc, descBullets? [] } }
 */
export default function EducationCard({school}) {
  // ─── Guard ────────────────────────────────────────────────────
  if (!school || typeof school !== "object") return null;

  const {
    logo,
    schoolName = "School / University",
    subHeader = "",
    desc = "",
    descBullets = []
  } = school;

  /** Resolve logo safely (fallback → generic placeholder) */
  let logoSrc;
  try {
    logoSrc =
      typeof logo === "string" ? require(`../../assets/images/${logo}`) : logo;
  } catch {
    logoSrc = require("../../assets/images/placeholder.png");
  }

  return (
    <>
      <div className="education-card">
        {/* ───── Logo column ───── */}
        <div className="education-logo">
          <img src={logoSrc} alt={schoolName} />
        </div>

        {/* ───── Text column ───── */}
        <div className="education-content">
          <h3 className="education-title">{schoolName}</h3>
          {subHeader && <p className="education-subtitle">{subHeader}</p>}
          {desc && <p className="education-desc">{desc}</p>}

          {/* Optional bullet points */}
          {descBullets.length > 0 && (
            <ul className="education-bullets">
              {descBullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* separator line */}
      <div className="education-card-border" />
    </>
  );
}

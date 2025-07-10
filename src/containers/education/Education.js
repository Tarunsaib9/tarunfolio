import React from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";

export default function Education() {
  if (!educationInfo.display) return null;

  /*── Filter out accidentally-empty items so we never pass “undefined” ──*/
  const validSchools = (educationInfo.schools || []).filter(Boolean);

  return (
    <section className="education-section" id="education">
      <h1 className="education-heading" style={{paddingLeft: "2.5rem"}}>
        Education
      </h1>

      <div className="education-card-container">
        {validSchools.map((school, idx) => (
          <EducationCard key={idx} school={school} />
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────
//  ExperienceCard.js – single work-experience card
//  Props:
//    └─ cardInfo = {
//         company, role, date, desc, descBullets: [],
//         companylogo (require(...) or URL)
//       }
//    └─ isDark   = boolean (from StyleContext)
// ─────────────────────────────────────────────────────
import React, {useEffect, useRef, useState} from "react";
import ColorThief from "colorthief";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo = {}, isDark}) {
  const {
    company = "",
    role = "",
    date = "",
    desc = "",
    descBullets = [],
    companylogo = ""
  } = cardInfo;

  const imgRef = useRef(null);
  const [rgbColor, setRgbColor] = useState("rgb(0,0,0)");

  /* ─── On image load: extract dominant colour for banner ─── */
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    function handleLoad() {
      try {
        const thief = new ColorThief();
        const [r, g, b] = thief.getColor(img);
        setRgbColor(`rgb(${r},${g},${b})`);
      } catch {
        /* fallback → default brand colour */
        setRgbColor("#004e92");
      }
    }

    if (img.complete) {
      handleLoad(); // cached
    } else {
      img.addEventListener("load", handleLoad);
      return () => img.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className={isDark ? "experience-card dark" : "experience-card"}>
      {/* ───── Banner ───── */}
      <div
        className="experience-banner"
        style={{background: rgbColor}}
        aria-label={company}
      >
        {/* blurred overlay for subtle texture */}
        <div
          className="experience-banner-blur"
          style={{background: rgbColor}}
        />
        <span className="experience-company">{company}</span>
      </div>

      {/* ───── Logo ───── */}
      <img
        ref={imgRef}
        src={companylogo}
        alt={`${company} logo`}
        className="experience-logo"
        crossOrigin="anonymous"
      />

      {/* ───── Content ───── */}
      <div className="experience-body">
        <h4 className="experience-role">{role}</h4>
        <p className="experience-date">{date}</p>
        {desc && <p className="experience-desc">{desc}</p>}

        {Array.isArray(descBullets) && descBullets.length > 0 && (
          <ul className="experience-bullets">
            {descBullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

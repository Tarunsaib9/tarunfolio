import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  // helper: open link if provided
  const openUrlInNewTab = (url, name) => {
    if (!url) {
      console.warn(`URL for "${name}" not provided`);
      return;
    }
    window.open(url, "_blank")?.focus();
  };

  // accept either `footer` or legacy `footerLink`
  const links = cardInfo.footer || cardInfo.footerLink || [];

  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      {/* --- Image --- */}
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Certificate"}
          className="card-image"
        />
      </div>

      {/* --- Title / Description --- */}
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        {cardInfo.description && (
          <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
            {cardInfo.description}
          </p>
        )}
      </div>

      {/* --- Footer tags (only if links exist) --- */}
      {links.length > 0 && (
        <div className="certificate-card-footer">
          {links.map((v, i) => (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

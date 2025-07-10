// src/components/footer/Footer.js
import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        {/* Simple personal credit (edit as you like) */}
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © 2022 Tarun Bikkunur
        </p>
      </div>
    </Fade>
  );
}

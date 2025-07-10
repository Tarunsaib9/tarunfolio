// src/components/displayLottie/DisplayLottie.js
import React from "react";
import Lottie from "lottie-react";

/**
 * Reusable Lottie wrapper.  You can pass width / height as props
 * or let it default to 100% width of its parent and 320-px height.
 */
export default function DisplayLottie({
  animationData,
  width = "100%", // fill the parent’s width
  height = 320, // sensible default height
  loop = true
}) {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      style={{width: "100%", height: "100%"}}
    />
  );
}

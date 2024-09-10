import React, { useState } from "react";
import "./TextMover.css";
const TextMover = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="text-container">
      <span
        className={`movable-text ${isHovered ? "move-right" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        START A PROJECT
      </span>
      <span className="arrow">→</span>
      <span
        className={`movable-text ${isHovered ? "move-right" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        JOIN THE TEAM
      </span>
      <span className="arrow">→</span>
    </div>
  );
};

export default TextMover;

import React from "react";
import "../Styles/ProgressCircle.css";

export default function ProgressCircle({
  percentage = 50,
  label = "Accuracy",
}) {
  const radius = 35;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  // 🎨 Dynamic color logic
  const getColor = () => {
    if (percentage < 50) return "#d32f2f";      // red
    if (percentage <= 85) return "#DA9603";     // orange
    return "#84BB29";                           // green
  };

  return (
    <div className="progress-wrapper">
      <svg height="100" width="100" className="progress-svg">
        <circle
          className="progress-bg"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="50"
          cy="50"
        />

        <circle
          className="progress-bar"
          style={{ stroke: getColor() }}
          strokeWidth={stroke}
          r={normalizedRadius}
          cx="50"
          cy="50"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>

      <div className="progress-text" style={{ color: getColor() }}>
        {percentage}%
      </div>

      <div className="progress-label">{label}</div>
    </div>
  );
}

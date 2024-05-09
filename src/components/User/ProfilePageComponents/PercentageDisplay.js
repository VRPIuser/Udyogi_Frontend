import React, { useState, useEffect } from "react";

const PercentageDisplay = ({ percentage }) => {
  const circleContainerClass = "relative";
  const circleSvgClass = "transform -rotate-90";
  const percentageTextClass = "block text-2xl font-semibold";
  const strengthTextClass = "text-sm text-zinc-600";

  const [prevPercentage, setPrevPercentage] = useState(0);

  useEffect(() => {
    setPrevPercentage(percentage);
  }, []);

  // Calculate the stroke dash offset based on the percentage
  const strokeDashOffset = 440 - (440 * prevPercentage) / 100; // Start from 0

  // Determine color based on percentage ranges
  let circleColor;
  if (percentage < 25) {
    circleColor = "#ff0000"; // red
  } else if (percentage < 50) {
    circleColor = "#f97316"; // orange
  } else if (percentage < 75) {
    circleColor = "#3b82f6"; // blue
  } else {
    circleColor = "#38c400"; // green
  }

  return (
    <div className="flex flex-col items-start justify-start p-4">
      <div className={circleContainerClass}>
        <svg className={circleSvgClass} width="150" height="150">
          <circle
            cx="75"
            cy="75"
            r="65" // Increased circle size
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="5"
          ></circle>
          <circle
            cx="75"
            cy="75"
            r="65" // Increased circle size
            fill="none"
            stroke={circleColor}
            strokeWidth="5" // Increased stroke width for larger circle
            strokeDasharray="440" // Circumference of a circle with radius 65
            strokeDashoffset="440" // Start from 0
            style={{
              transition: "stroke-dashoffset 0.5s ease-in-out",
              strokeDashoffset: strokeDashOffset,
            }}
          ></circle>
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <span className={percentageTextClass}>{percentage}%</span>
          <span className={strengthTextClass}>Profile Strength</span>
        </div>
      </div>
    </div>
  );
};

export default PercentageDisplay;

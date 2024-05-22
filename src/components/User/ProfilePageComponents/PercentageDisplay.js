import { useEffect, useState } from "react";

const PercentageDisplay = ({ percentage, radius, text }) => {
  const circleContainerClass = "relative";
  const circleSvgClass = "transform -rotate-90";
  const percentageTextClass = "block text-lg font-semibold";
  const strengthTextClass = "text-sm text-zinc-600";

  const [prevPercentage, setPrevPercentage] = useState(0);

  useEffect(() => {
    setPrevPercentage(percentage);

    console.log(2 * Math.PI * (radius - 5));
    console.log(strokeDashOffset);
  }, [percentage]);

  // Calculate the stroke dash offset based on the percentage
  const strokeDashOffset =
    2 * Math.PI * (radius - 5) * (1 - prevPercentage / 100);

  // Determine color based on percentage ranges
  let circleColor;
  if (prevPercentage < 25) {
    circleColor = "#ff0000"; // red
  } else if (prevPercentage < 50) {
    circleColor = "#f97316"; // orange
  } else if (prevPercentage < 75) {
    circleColor = "#3b82f6"; // blue
  } else {
    circleColor = "#38c400"; // green
  }

  return (
    <div className="flex flex-col items-start justify-start">
      <div className={circleContainerClass}>
        <svg className={circleSvgClass} width={2 * radius} height={2 * radius}>
          <circle
            cx={radius}
            cy={radius}
            r={radius - 5} // Adjusted radius considering stroke width
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="5"
          ></circle>
          <circle
            cx={radius}
            cy={radius}
            r={radius - 5} // Adjusted radius considering stroke width
            fill="none"
            stroke={circleColor}
            strokeWidth="5" // Increased stroke width for larger circle
            strokeDasharray={2 * Math.PI * (radius - 5)} // Circumference of the circle
            strokeDashoffset={strokeDashOffset} // Start from 0
            style={{
              transition: "stroke-dashoffset 1s ease-in-out",
              strokeDashoffset: strokeDashOffset,
            }}
          ></circle>
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <span className={percentageTextClass}>{percentage}%</span>
          <span className={strengthTextClass}>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default PercentageDisplay;

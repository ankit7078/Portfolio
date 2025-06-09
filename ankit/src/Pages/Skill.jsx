import React, { useEffect, useState } from "react";
import "./Skills.css";

const skills = [
  { name: "HTML5", percentage: 95 },
  { name: "CSS", percentage: 85 },
  { name: "JavaScript", percentage: 80 },
  { name: "WordPress", percentage: 80 },
];

const CircleProgress = ({ percentage, name }) => {
  const [count, setCount] = useState(0);
  const [dashOffset, setDashOffset] = useState(0);

  const size = 150;
  const strokeWidth = 7;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    let current = 0;
    const speed = 15; // lower is faster
    const step = () => {
      if (current <= percentage) {
        setCount(current);
        const offset = ((100 - current) / 100) * circumference;
        setDashOffset(offset);
        current++;
        setTimeout(step, speed);
      }
    };
    step();
  }, [percentage, circumference]);

  return (
    <div className="circle-container">
      <svg width={size} height={size}>
        <circle
          className="bg"
          stroke="#222"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="progress"
          stroke="#fff"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fill="#fff"
          fontSize="20"
        >
          {count}%
        </text>
      </svg>
      <p>{name}</p>
    </div>
  );
};

export default function SkillsSection() {
  return (
    <div className="bg-black">
    <h5 className="pb-2 py-5 text-uppercase text-white text-center bg-black">Skills</h5>
    <hr className="pb-5 divider" />
    <div className="skills-section">
      
      {skills.map((skill, index) => (
        <CircleProgress
          key={index}
          percentage={skill.percentage}
          name={skill.name}
        />
      ))}
    </div></div>
  );
}

import React from "react";
const Circle = ({ current }) => {
  const color = current ? "#FFFFFF" : "#555555";
  return (
    <svg
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='19.583px'
      height='19.583px'
      viewBox='2.833 7.583 19.583 19.583'
      enable-background='new 2.833 7.583 19.583 19.583'
    >
      <g id='Layer_1_1_'></g>
      <rect x='2.833' y='7.583' fill='none' width='19.583' height='19.583' />
      <circle fill={color} cx='12.625' cy='17.374' r='3.75' />
    </svg>
  );
};
export default Circle;

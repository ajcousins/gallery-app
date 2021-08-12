import React from "react";

const Bin = ({ color }) => {
  return (
    <svg
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      width='30px'
      height='30px'
      viewBox='0 0 100 100'
      enable-background='new 0 0 100 100'
    >
      <g id='Layer_1_1_'></g>
      <g id='Layer_2'>
        <g>
          <line
            fill='none'
            stroke={color ? color : "#FFFFFF"}
            stroke-width='5'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-miterlimit='10'
            x1='13.256'
            y1='19.757'
            x2='87.256'
            y2='19.757'
          />

          <polyline
            fill='none'
            stroke={color ? color : "#FFFFFF"}
            stroke-width='5'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-miterlimit='10'
            points='
			18.384,19.757 24.745,92.757 74.745,92.757 81.881,19.757 		'
          />

          <polyline
            fill='none'
            stroke={color ? color : "#FFFFFF"}
            stroke-width='5'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-miterlimit='10'
            points='
			33.911,19.5 38.745,7.757 60.745,7.757 65.577,19.628 		'
          />

          <line
            fill='none'
            stroke={color ? color : "#FFFFFF"}
            stroke-width='5'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-miterlimit='10'
            x1='33.911'
            y1='33.743'
            x2='36.745'
            y2='76.743'
          />

          <line
            fill='none'
            stroke={color ? color : "#FFFFFF"}
            stroke-width='5'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-miterlimit='10'
            x1='49.756'
            y1='34.257'
            x2='49.756'
            y2='77.257'
          />

          <line
            fill='none'
            stroke={color ? color : "#FFFFFF"}
            stroke-width='5'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-miterlimit='10'
            x1='65.577'
            y1='33.743'
            x2='62.745'
            y2='76.743'
          />
        </g>
      </g>
      <rect fill='none' width='100' height='100' />
    </svg>
  );
};
export default Bin;

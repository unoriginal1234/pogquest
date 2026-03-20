import React from 'react';

const StatsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Axes */}
      <path d="M14,10 L14,86 L90,86" fill="none" stroke="#aaaaaa" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Bar 1 - teal */}
      <rect x="22" y="64" width="16" height="22" fill="#00A99D" />

      {/* Bar 2 - purple */}
      <rect x="46" y="44" width="16" height="42" fill="#93278F" />

      {/* Bar 3 - yellow */}
      <rect x="70" y="24" width="16" height="62" fill="#FFD34E" />

      {/* Dashed trend line */}
      <path
        d="M18,76 L42,54 L66,36 L86,18"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.5"
        strokeDasharray="5,3"
        strokeLinecap="round"
      />

      {/* Arrowhead */}
      <polygon points="86,18 79,22 83,28" fill="#ffffff" />
    </svg>
  );
};

export default StatsIcon;
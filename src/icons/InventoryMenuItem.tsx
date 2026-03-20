import React from 'react';

const InventoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        {/* Jazz Pattern for the box side */}
        <pattern id="jazzBox" patternUnits="userSpaceOnUse" width="40" height="40">
          <rect width="40" height="40" fill="#f0f0f0" />
          <path d="M-5,20 Q10,5 25,25 T50,15" fill="none" stroke="#00A99D" strokeWidth="4" />
          <path d="M0,30 L10,25 L20,35 L30,20 L40,30" fill="none" stroke="#93278F" strokeWidth="3" />
        </pattern>
      </defs>

      {/* The Storage Box (Isometric-ish) */}
      {/* Back Panel */}
      <path d="M20,40 L80,40 L90,30 L30,30 Z" fill="#ccc" stroke="#333" strokeWidth="2" />
      
      {/* Bottom/Side Panel with Jazz Design */}
      <path d="M20,40 L80,40 L80,80 L20,80 Z" fill="url(#jazzBox)" stroke="#333" strokeWidth="2" />
      
      {/* Right Side Shadow */}
      <path d="M80,40 L90,30 L90,70 L80,80 Z" fill="#999" stroke="#333" strokeWidth="2" />

      {/* Stack of Pogs inside the box */}
      <g transform="translate(35, 35)">
        {/* Bottom Pog */}
        <ellipse cx="15" cy="30" rx="12" ry="5" fill="#93278F" stroke="#222" strokeWidth="1" />
        {/* Middle Pog */}
        <ellipse cx="15" cy="25" rx="12" ry="5" fill="#00A99D" stroke="#222" strokeWidth="1" />
        {/* Top Pog */}
        <ellipse cx="15" cy="20" rx="12" ry="5" fill="white" stroke="#222" strokeWidth="1" />
        {/* Detail on top pog */}
        <ellipse cx="15" cy="20" rx="8" ry="3" fill="none" stroke="#93278F" strokeWidth="0.5" />
      </g>

      {/* Open Lid Flip */}
      <path d="M20,40 L10,25 L70,25 L80,40" fill="#ddd" stroke="#333" strokeWidth="2" />
    </svg>
  );
};

export default InventoryIcon;
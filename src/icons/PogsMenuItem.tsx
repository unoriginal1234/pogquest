import React from 'react';

const PogsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        {/* The Jazz Design Pattern */}
        <pattern id="jazzPattern" patternUnits="userSpaceOnUse" width="100" height="100">
          <rect width="100" height="100" fill="#FFFFFF" />
          {/* Teal Swoosh */}
          <path 
            d="M-10,40 Q20,10 50,50 T110,30 L110,60 Q80,80 50,40 T-10,70 Z" 
            fill="#00A99D" 
            transform="rotate(-15, 50, 50)"
          />
          {/* Purple Zig-Zag */}
          <path 
            d="M0,60 L20,50 L40,65 L60,45 L80,70 L100,55 L100,75 L80,90 L60,65 L40,85 L20,70 L0,80 Z" 
            fill="#93278F" 
          />
        </pattern>
      </defs>

      {/* The Pog Shape */}
      {/* Outer Border (Slightly 90s thick) */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="#333" strokeWidth="4" />
      
      {/* Inner "Jazz" Fill */}
      <circle cx="50" cy="50" r="44" fill="url(#jazzPattern)" />
      
      {/* Subtle Plastic Sheen (Optional) */}
      <path 
        d="M20,30 A35,35 0 0 1 50,15" 
        fill="none" 
        stroke="white" 
        strokeWidth="3" 
        strokeLinecap="round" 
        opacity="0.6" 
      />
    </svg>
  );
};

export default PogsIcon;
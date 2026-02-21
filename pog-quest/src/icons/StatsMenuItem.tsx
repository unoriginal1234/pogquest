import React from 'react';

const StatsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        {/* Jazz Pattern for the Chart Bars */}
        <pattern id="jazzStats" patternUnits="userSpaceOnUse" width="30" height="30">
          <rect width="30" height="30" fill="#ffffff" />
          <path d="M-5,15 Q10,5 20,20 T40,10" fill="none" stroke="#00A99D" strokeWidth="4" />
          <path d="M0,25 L10,15 L20,25 L30,10" fill="none" stroke="#93278F" strokeWidth="3" />
        </pattern>
      </defs>

      {/* Chart Axes (Classic 90s thick lines) */}
      <path d="M15,15 L15,85 L90,85" fill="none" stroke="#333" strokeWidth="4" strokeLinecap="round" />
      
      {/* Bar 1 (Small Stack) */}
      <rect x="25" y="60" width="15" height="25" fill="url(#jazzStats)" stroke="#333" strokeWidth="2" />
      <path d="M25,60 L32.5,55 L47.5,55 L40,60 Z" fill="#ccc" stroke="#333" strokeWidth="2" />
      <path d="M40,60 L47.5,55 L47.5,80 L40,85 Z" fill="#999" stroke="#333" strokeWidth="2" />

      {/* Bar 2 (Medium Stack) */}
      <rect x="50" y="40" width="15" height="45" fill="url(#jazzStats)" stroke="#333" strokeWidth="2" />
      <path d="M50,40 L57.5,35 L72.5,35 L65,40 Z" fill="#ccc" stroke="#333" strokeWidth="2" />
      <path d="M65,40 L72.5,35 L72.5,80 L65,85 Z" fill="#999" stroke="#333" strokeWidth="2" />

      {/* Bar 3 (Winning Stack!) */}
      <rect x="75" y="25" width="15" height="60" fill="url(#jazzStats)" stroke="#333" strokeWidth="2" />
      <path d="M75,25 L82.5,20 L97.5,20 L90,25 Z" fill="#ccc" stroke="#333" strokeWidth="2" />
      <path d="M90,25 L97.5,20 L97.5,80 L90,85 Z" fill="#999" stroke="#333" strokeWidth="2" />

      {/* Upward Arrow Trendline */}
      <path 
        d="M20,70 L45,50 L70,35 L85,20" 
        fill="none" 
        stroke="#FFD34E" 
        strokeWidth="3" 
        strokeDasharray="4,2"
      />
      <path d="M82,18 L90,18 L90,26" fill="none" stroke="#FFD34E" strokeWidth="3" />
    </svg>
  );
};

export default StatsIcon;
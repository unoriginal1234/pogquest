import React from 'react';

const SlammerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        {/* Beveled Metallic Rim Gradient */}
        <linearGradient id="rimGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0f0f0" />
          <stop offset="45%" stopColor="#999" />
          <stop offset="55%" stopColor="#bbb" />
          <stop offset="100%" stopColor="#666" />
        </linearGradient>

        {/* The Swirl Pattern */}
        <pattern id="swirlPattern" patternUnits="userSpaceOnUse" width="100" height="100">
          <rect width="100" height="100" fill="white" />
          {/* Teal Swirls */}
          <path d="M50,50 Q70,10 90,50 T50,90 T10,50 T50,10" fill="none" stroke="#00A99D" strokeWidth="12" strokeLinecap="round" opacity="0.8" />
          <path d="M20,20 Q40,0 60,20" fill="none" stroke="#00A99D" strokeWidth="8" strokeLinecap="round" />
          {/* Purple Swirls */}
          <path d="M50,50 Q30,90 10,50 T50,10 T90,50 T50,90" fill="none" stroke="#93278F" strokeWidth="10" strokeLinecap="round" opacity="0.7" />
        </pattern>
        
        {/* Drop Shadow for the Text */}
        <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="2" dy="2" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main Shadow */}
      <circle cx="103" cy="103" r="90" fill="black" opacity="0.2" />

      {/* Outer Metal Rim */}
      <circle cx="100" cy="100" r="90" fill="url(#rimGradient)" stroke="#333" strokeWidth="2" />
      
      {/* Inner Bevel Ring */}
      <circle cx="100" cy="100" r="75" fill="none" stroke="#666" strokeWidth="4" opacity="0.5" />

      {/* Jazz Swirl Inlay */}
      <circle cx="100" cy="100" r="72" fill="url(#swirlPattern)" stroke="#222" strokeWidth="3" />

     

      {/* Bottom Right Star Impact */}
      <g transform="translate(155, 155) rotate(15)">
        <path 
          d="M0,-15 L4,-5 L15,-4 L7,3 L10,14 L0,8 L-10,14 L-7,3 L-15,-4 L-4,-5 Z" 
          fill="#FFD34E" 
          stroke="black" 
          strokeWidth="2" 
        />
      </g>
    </svg>
  );
};

export default SlammerIcon;
import React from 'react';

interface BaddieIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const BaddieIcon: React.FC<BaddieIconProps> = ({ size = 40, ...props }) => {
  const viewboxSize = 250;
  const viewBox = `0 0 ${viewboxSize} ${viewboxSize}`;

  const palette = {
    black: '#000000',
    white: '#FFFFFF',
    rim: '#808080',
    warning: '#FFFF00',
    magenta: '#FF00FF',
    cyan: '#00FFFF',
    shadow: '#C0C0C0',
  };

  return (
    <svg 
      width={size} 
      height={size} 
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      style={{ shapeRendering: 'crispEdges', display: 'block' }}
      {...props}
    >
      <title>BAD_SECTOR.EXE Pog</title>

      {/* --- POG STRUCTURE --- */}
      {/* 1. Base Black Outer Rim */}
      <circle cx="125" cy="125" r="120" fill={palette.black} />
      
      {/* 2. Gray Bevel Layer */}
      <circle cx="125" cy="125" r="115" fill={palette.rim} />
      
      {/* 3. Outer Black Edge of Inner Circle */}
      <circle cx="125" cy="125" r="110" fill={palette.black} />
      
      {/* 4. Main White Background (with slight dither effect) */}
      <circle cx="125" cy="125" r="105" fill={palette.white} />
      <circle cx="125" cy="125" r="105" fill={palette.shadow} fillOpacity="0.3" />

      {/* --- JAZZ CUP GRAPHICS --- */}
      {/* Swashes and Confetti */}
      <path d="M40,110 L80,140 L100,100 L70,80 Z" fill={palette.cyan} />
      <path d="M140,180 L180,210 L210,170 L170,140 Z" fill={palette.cyan} />
      
      <path d="M50,160 Q80,180 120,160 T200,190" stroke={palette.magenta} strokeWidth="12" fill="none" />
      <path d="M190,70 Q210,90 190,120 T210,160" stroke={palette.magenta} strokeWidth="12" fill="none" />

      {/* --- LOGO GRAPHICS --- */}
      {/* 1. Black Monster Shadow */}
      <path d="M100,105 L150,105 L160,135 L125,180 L90,135 Z" fill={palette.black} />
      {/* Monster details (claws, torso definition, etc.) */}
      <path d="M90,135 L100,160 L95,170 L85,160 Z" fill={palette.black} />
      <path d="M160,135 L150,160 L155,170 L165,160 Z" fill={palette.black} />

      {/* 2. Magenta Eyes */}
      <rect x="110" y="125" width="8" height="12" fill={palette.magenta} />
      <rect x="132" y="125" width="8" height="12" fill={palette.magenta} />

      {/* 3. Floating Warning Icons */}
      <g stroke={palette.black} strokeWidth="2">
        {/* Left Icon */}
        <polygon points="100,60 85,90 115,90" fill={palette.warning} />
        <text x="100" y="85" fontSize="18" fill={palette.black} textAnchor="middle" fontWeight="bold">!</text>

        {/* Center Icon */}
        <polygon points="125,45 110,75 140,75" fill={palette.warning} />
        <text x="125" y="70" fontSize="18" fill={palette.black} textAnchor="middle" fontWeight="bold">!</text>
        
        {/* Right Icon */}
        <polygon points="150,60 135,90 165,90" fill={palette.warning} />
        <text x="150" y="85" fontSize="18" fill={palette.black} textAnchor="middle" fontWeight="bold">!</text>
      </g>

      {/* --- TEXT LABEL --- */}
      <g transform="rotate(-30 125 125)">
        {/* Rounded Text Label Area */}
        <rect x="70" y="25" width="110" height="24" rx="12" fill={palette.black} />
        {/* Chicago-style font representation */}
        <text 
          x="125" 
          y="42" 
          fill={palette.white} 
          fontSize="14" 
          textAnchor="middle" 
          fontFamily="Courier New, monospace" 
          fontWeight="bold"
        >
          BAD_SECTOR.EXE
        </text>
      </g>
    </svg>
  );
};

export default BaddieIcon;
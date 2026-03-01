import React from 'react';

interface ShopIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const ShopIcon: React.FC<ShopIconProps> = ({ size = 40, ...props }) => {
  const viewboxSize = 250;
  const viewBox = `0 0 ${viewboxSize} ${viewboxSize}`;

  const palette = {
    black: '#000000',
    white: '#FFFFFF',
    rim: '#808080',
    teal: '#00FFFF',
    magenta: '#FF00FF',
    yellow: '#FFFF00',
    confetti1: '#FF00FF',
    confetti2: '#00FFFF',
    confetti3: '#FFFF00',
    confetti4: '#9933FF',
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
      <title>SHOP.DLL Pog</title>
      
      {/* Define the gradients used for the pseudo-3D effects */}
      <defs>
        {/* The chrome sphere gradient */}
        <radialGradient id="chromeSphereGrad" cx="35%" cy="35%" r="60%" fx="35%" fy="35%">
          <stop offset="0%" stopColor="#FFFFFF" /> {/* Hot specular highlight */}
          <stop offset="30%" stopColor="#E0E0E0" />
          <stop offset="70%" stopColor="#A0A0A0" /> {/* Main body */}
          <stop offset="90%" stopColor="#707070" /> {/* Dark shadow rim */}
          <stop offset="100%" stopColor="#A0A0A0" /> {/* Bounce light edge */}
        </radialGradient>

        {/* The background vertical gradient */}
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B0E0E6" /> {/* Pale blue top */}
          <stop offset="100%" stopColor="#FFFFFF" /> {/* White horizon */}
        </linearGradient>

        {/* The checkerboard floor gradient (simulating distance) */}
        <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C0C0C0" />
          <stop offset="100%" stopColor="#A0A0A0" />
        </linearGradient>
      </defs>

      {/* --- POG STRUCTURE --- */}
      {/* 1. Base Black Outer Rim */}
      <circle cx="125" cy="125" r="120" fill={palette.black} />
      
      {/* 2. Gray Bevel Layer (Classic Win95 Gray) */}
      <circle cx="125" cy="125" r="115" fill={palette.rim} />
      
      {/* 3. Outer Black Edge of Inner Circle */}
      <circle cx="125" cy="125" r="110" fill={palette.black} />
      
      {/* 4. Clip the inner contents to the 105r circle */}
      <clipPath id="innerClip">
        <circle cx="125" cy="125" r="105" />
      </clipPath>

      {/* --- CONTENT (Clipped to Pog Inner Circle) --- */}
      <g clipPath="url(#innerClip)">
        {/* Background Sky Gradient */}
        <rect x="20" y="20" width="210" height="210" fill="url(#skyGrad)" />

        {/* Checkerboard Floor */}
        <rect x="20" y="160" width="210" height="70" fill="url(#floorGrad)" />
        {/* Draw checkerboard pattern (pixelated style) */}
        <g fill="#A0A0A0" fillOpacity="0.5">
          <rect x="20" y="160" width="10" height="10" /> <rect x="40" y="160" width="10" height="10" />
          <rect x="60" y="160" width="10" height="10" /> <rect x="80" y="160" width="10" height="10" />
          {/* ... Add more rectangles here to fill the grid if desired ... */}
        </g>
        
        {/* --- CONFETTI (Random floating shapes) --- */}
        <g>
          {/* Magenta Diamonds */}
          <path d="M40,60 L46,66 L40,72 L34,66 Z" fill={palette.confetti1} />
          <path d="M210,120 L216,126 L210,132 L204,126 Z" fill={palette.confetti1} />
          {/* Cyan Squares */}
          <rect x="180" y="40" width="10" height="10" fill={palette.confetti2} transform="rotate(20 185 45)" />
          {/* Yellow Triangles */}
          <polygon points="60,90 70,105 50,105" fill={palette.confetti3} transform="rotate(-15 60 97.5)" />
          {/* Purple Zigs */}
          <path d="M110,40 L118,48 L110,56 L102,48 Z" fill={palette.confetti4} />
        </g>

        {/* --- THE MERCHANT --- */}
        {/* 1. Contact Shadow on floor */}
        <ellipse cx="125" cy="205" rx="30" ry="8" fill="#505050" fillOpacity="0.6" />

        {/* 2. Chrome Sphere (Using the gradient defined in <defs>) */}
        <circle cx="125" cy="125" r="65" fill="url(#chromeSphereGrad)" stroke={palette.black} strokeWidth="1" />

        {/* 3. Pixel Sunglasses (Deal With It style) */}
        <g fill={palette.black} stroke={palette.white} strokeWidth="1">
          {/* Left Lens */}
          <rect x="80" y="105" width="40" height="22" />
          <path d="M80,105 L120,105 L120,100 L115,100 L115,95 L110,95 L110,100 L85,100 L85,105 Z" fill={palette.white} />
          {/* Right Lens */}
          <rect x="130" y="105" width="40" height="22" />
          <path d="M130,105 L170,105 L170,100 L165,100 L165,95 L160,95 L160,100 L135,100 L135,105 Z" fill={palette.white} />
          {/* Bridge */}
          <rect x="120" y="112" width="10" height="6" fill={palette.black} stroke="none" />
        </g>
      </g>

      {/* --- TEXT LABEL (The black band) --- */}
      <g transform="rotate(30 125 125)">
        {/* Rounded Text Label Area */}
        <rect x="80" y="25" width="90" height="24" rx="12" fill={palette.black} />
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
          SHOP.DLL
        </text>
      </g>
    </svg>
  );
};

export default ShopIcon;
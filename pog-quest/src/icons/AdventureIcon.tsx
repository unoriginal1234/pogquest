import React from 'react';

interface AdventureIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const AdventureIcon: React.FC<AdventureIconProps> = ({ size = 40, ...props }) => {
  const viewboxSize = 250;
  const viewBox = `0 0 ${viewboxSize} ${viewboxSize}`;

  const palette = {
    black: '#000000',
    white: '#FFFFFF',
    rim: '#808080',
    teal: '#008080',
    blue: '#0000FF',
    folderYellow: '#FFD700',
    folderHighlight: '#FFF8DC',
    gridGreen: '#00FF00',
    jazzCyan: '#00FFFF',
    jazzMagenta: '#FF00FF',
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
      <title>C:\DUNGEON\LEVEL_1 Pog</title>
      
      {/* Define definitions and gradients */}
      <defs>
        {/* Sky gradient background (Inside the Pog) */}
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={palette.blue} /> {/* Deep blue top */}
          <stop offset="100%" stopColor="#FFFFFF" /> {/* White horizon */}
        </linearGradient>

        {/* 1. THE FOLDER GEOMETRY (Defined here for reuse) */}
        {/* We use specific points to simulate the 3D perspective angle */}
        <path id="folderBody" d="M100,80 L200,80 L200,160 L100,160 Z" />
        <path id="folderFlap" d="M100,80 L180,60 L180,70 L100,90 Z" />
        <path id="folderInsideTab" d="M100,80 L130,80 L130,70 L100,70 Z" />

        {/* 2. THE MATRIX GRID PATTERN */}
        <pattern id="matrixGrid" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect width="10" height="10" fill="none" stroke={palette.gridGreen} strokeWidth="1"/>
        </pattern>

        {/* 3. CLIP PATHS (Essential for constraints) */}
        {/* Main inner circle clip */}
        <clipPath id="innerClip">
          <circle cx="125" cy="125" r="105" />
        </clipPath>
        
        {/* Clip for the grid *only* where it comes out of the folder */}
        <clipPath id="gridClip">
          <path d="M100,160 Q150,220 200,160 Z" />
        </clipPath>
      </defs>

      {/* --- POG STRUCTURE --- */}
      {/* 1. Base Black Outer Rim */}
      <circle cx="125" cy="125" r="120" fill={palette.black} />
      
      {/* 2. Gray Bevel Layer (Classic Win95 Gray) */}
      <circle cx="125" cy="125" r="115" fill={palette.rim} />
      
      {/* 3. Outer Black Edge of Inner Circle */}
      <circle cx="125" cy="125" r="110" fill={palette.black} />
      
      {/* --- CONTENT (Clipped to Pog Inner Circle) --- */}
      <g clipPath="url(#innerClip)">
        {/* Background Sky Gradient */}
        <rect x="20" y="20" width="210" height="210" fill="url(#skyGrad)" />
        
        {/* --- CONFETTI (Random floating shapes) --- */}
        <g>
          {/* Jazz Cyan Zigs */}
          <path d="M40,60 L46,66 L40,72 L34,66 Z" fill={palette.jazzCyan} />
          <path d="M210,60 L216,66 L210,72 L204,66 Z" fill={palette.jazzCyan} />
          {/* Jazz Magenta Diamonds */}
          <path d="M180,180 L186,186 L180,192 L174,186 Z" fill={palette.jazzMagenta} />
          {/* Small Squares */}
          <rect x="50" y="190" width="8" height="8" fill={palette.jazzMagenta} />
        </g>
        
        {/* --- THE 3D MANILA FOLDER --- */}
        <g stroke={palette.black} strokeWidth="1.5">
          {/* Inside back tab */}
          <use href="#folderInsideTab" fill={palette.folderHighlight} />
          
          {/* Main folder body (using base yellow) */}
          <use href="#folderBody" fill={palette.folderYellow} />
          
          {/* The angled flap (recessed yellow) */}
          <use href="#folderFlap" fill={palette.folderYellow} fillOpacity="0.8" />
          
          {/* Top highlight edges */}
          <path d="M100,80 L200,80 L180,60" fill="none" stroke={palette.folderHighlight} strokeWidth="1" />
        </g>
        
        {/* --- THE MATRIX GRID SPILL --- */}
        {/* 1. CONTACT GRID (Inside the folder opening) */}
        <rect x="100" y="150" width="100" height="20" fill="url(#matrixGrid)" fillOpacity="0.6"/>

        {/* 2. SPILLING GRID (Outside the folder, clipped) */}
        <g clipPath="url(#gridClip)">
          {/* This rectangle defines the spill area, filled with the grid pattern */}
          <rect x="80" y="160" width="140" height="70" fill="url(#matrixGrid)" />
          
          {/* Add vertical green lines to emphasize the 'pouring' effect */}
          <line x1="100" y1="160" x2="100" y2="230" stroke={palette.gridGreen} strokeWidth="1" />
          <line x1="125" y1="160" x2="125" y2="230" stroke={palette.gridGreen} strokeWidth="1" />
          <line x1="150" y1="160" x2="150" y2="230" stroke={palette.gridGreen} strokeWidth="1" />
          <line x1="175" y1="160" x2="175" y2="230" stroke={palette.gridGreen} strokeWidth="1" />
          <line x1="200" y1="160" x2="200" y2="230" stroke={palette.gridGreen} strokeWidth="1" />
        </g>
      </g>

      {/* --- TEXT LABEL (The black band) --- */}
      {/* It is tilted down slightly like the folder */}
      <g transform="rotate(30 125 125)">
        {/* Rounded Text Label Area */}
        <rect x="60" y="25" width="130" height="24" rx="12" fill={palette.black} />
        {/* Chicago-style font representation */}
        <text 
          x="125" 
          y="42" 
          fill={palette.white} 
          fontSize="11" 
          textAnchor="middle" 
          fontFamily="Courier New, monospace" 
          fontWeight="bold"
        >
          C:\DUNGEON\LEVEL_1
        </text>
      </g>
    </svg>
  );
};

export default AdventureIcon;
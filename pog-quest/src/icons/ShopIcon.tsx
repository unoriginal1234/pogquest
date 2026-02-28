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
    gold: '#FFD700',
    magenta: '#FF00FF',
    cyan: '#00FFFF',
    shadow: '#C0C0C0',
    green: '#00FF00',
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
      <title>SHOP_ZONE.EXE Pog</title>

      {/* Base Structure */}
      <circle cx="125" cy="125" r="120" fill={palette.black} />
      <circle cx="125" cy="125" r="115" fill={palette.rim} />
      <circle cx="125" cy="125" r="110" fill={palette.black} />
      <circle cx="125" cy="125" r="105" fill={palette.white} />
      <circle cx="125" cy="125" r="105" fill={palette.shadow} fillOpacity="0.3" />

      {/* Jazz Cup Graphics */}
      <path d="M35,100 L75,130 L95,90 L65,70 Z" fill={palette.cyan} />
      <path d="M155,170 L195,200 L220,160 L180,130 Z" fill={palette.cyan} />
      <path d="M45,150 Q75,170 115,150 T195,180" stroke={palette.magenta} strokeWidth="10" fill="none" />
      <path d="M200,60 Q220,80 200,110 T220,150" stroke={palette.magenta} strokeWidth="10" fill="none" />

      {/* Cash Register / Shop Symbol */}
      <rect x="85" y="95" width="80" height="60" fill={palette.black} rx="4" />
      <rect x="90" y="100" width="70" height="35" fill={palette.green} />
      
      {/* Dollar Sign on Register */}
      <text 
        x="125" 
        y="128" 
        fill={palette.black} 
        fontSize="28" 
        textAnchor="middle" 
        fontFamily="Courier New, monospace" 
        fontWeight="bold"
      >
        $$$
      </text>

      {/* Register Buttons */}
      <rect x="95" y="140" width="12" height="10" fill={palette.magenta} />
      <rect x="112" y="140" width="12" height="10" fill={palette.cyan} />
      <rect x="129" y="140" width="12" height="10" fill={palette.gold} />
      <rect x="146" y="140" width="12" height="10" fill={palette.green} />

      {/* Floating Coins */}
      <g>
        <circle cx="60" cy="70" r="15" fill={palette.gold} stroke={palette.black} strokeWidth="2" />
        <text x="60" y="75" fill={palette.black} fontSize="14" textAnchor="middle" fontWeight="bold">¢</text>
        
        <circle cx="190" cy="80" r="12" fill={palette.gold} stroke={palette.black} strokeWidth="2" />
        <text x="190" y="85" fill={palette.black} fontSize="12" textAnchor="middle" fontWeight="bold">¢</text>
        
        <circle cx="70" cy="180" r="10" fill={palette.gold} stroke={palette.black} strokeWidth="2" />
        <text x="70" y="184" fill={palette.black} fontSize="10" textAnchor="middle" fontWeight="bold">¢</text>
      </g>

      {/* Text Label */}
      <g transform="rotate(-30 125 125)">
        <rect x="75" y="25" width="100" height="24" rx="12" fill={palette.black} />
        <text 
          x="125" 
          y="42" 
          fill={palette.white} 
          fontSize="14" 
          textAnchor="middle" 
          fontFamily="Courier New, monospace" 
          fontWeight="bold"
        >
          SHOP_ZONE
        </text>
      </g>
    </svg>
  );
};

export default ShopIcon;

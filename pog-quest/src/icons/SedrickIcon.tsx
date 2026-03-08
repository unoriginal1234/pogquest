import React from 'react';

interface SedrickIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const SedrickIcon: React.FC<SedrickIconProps> = ({ size = 48, ...props }) => {
  const px = 8;

  const palette = {
    black: '#000000',
    skinLight: '#00FF00',
    skinMid: '#00CC00',
    skinDark: '#008800',
    eyeWhite: '#FFFFFF',
    pupil: '#FF0000',
    mouth: '#880000',
    hatDark: '#4400AA',
    hatLight: '#7733DD',
    hatBrim: '#5500CC',
    star: '#FFFF00',
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 160"
      xmlns="http://www.w3.org/2000/svg"
      style={{ shapeRendering: 'crispEdges', display: 'block' }}
      {...props}
    >
      <title>Sedrick the Goblin</title>

      {/* Wizard hat - tip */}
      <rect x={56} y={0} width={px * 2} height={px} fill={palette.hatDark} />
      <rect x={48} y={px} width={px * 4} height={px} fill={palette.hatDark} />
      <rect x={40} y={px * 2} width={px * 6} height={px} fill={palette.hatLight} />
      <rect x={36} y={px * 3} width={px * 7} height={px} fill={palette.hatLight} />
      <rect x={32} y={px * 4} width={px * 8} height={px} fill={palette.hatDark} />
      <rect x={28} y={px * 5} width={px * 9} height={px} fill={palette.hatDark} />

      {/* Hat star */}
      <rect x={52} y={px * 3} width={px} height={px} fill={palette.star} />
      <rect x={48} y={px * 4} width={px} height={px} fill={palette.star} />
      <rect x={56} y={px * 4} width={px} height={px} fill={palette.star} />
      <rect x={52} y={px * 5} width={px} height={px} fill={palette.star} />

      {/* Hat brim */}
      <rect x={16} y={px * 6} width={px * 12} height={px} fill={palette.hatBrim} />

      {/* Head */}
      <rect x={32} y={px * 7} width={px * 8} height={px} fill={palette.skinMid} />
      <rect x={24} y={px * 8} width={px * 10} height={px} fill={palette.skinLight} />
      <rect x={24} y={px * 9} width={px * 10} height={px} fill={palette.skinLight} />
      <rect x={24} y={px * 10} width={px * 10} height={px} fill={palette.skinMid} />
      <rect x={32} y={px * 11} width={px * 8} height={px} fill={palette.skinMid} />

      {/* Pointy ears */}
      <rect x={16} y={px * 8} width={px} height={px} fill={palette.skinDark} />
      <rect x={8} y={px * 9} width={px} height={px} fill={palette.skinLight} />
      <rect x={16} y={px * 9} width={px} height={px} fill={palette.skinLight} />
      <rect x={16} y={px * 10} width={px} height={px} fill={palette.skinDark} />

      <rect x={104} y={px * 8} width={px} height={px} fill={palette.skinDark} />
      <rect x={112} y={px * 9} width={px} height={px} fill={palette.skinLight} />
      <rect x={104} y={px * 9} width={px} height={px} fill={palette.skinLight} />
      <rect x={104} y={px * 10} width={px} height={px} fill={palette.skinDark} />

      {/* Eyes */}
      <rect x={36} y={px * 9} width={px * 2} height={px} fill={palette.eyeWhite} />
      <rect x={44} y={px * 9} width={px} height={px} fill={palette.pupil} />
      <rect x={72} y={px * 9} width={px * 2} height={px} fill={palette.eyeWhite} />
      <rect x={72} y={px * 9} width={px} height={px} fill={palette.pupil} />

      {/* Nose */}
      <rect x={56} y={px * 10} width={px} height={px} fill={palette.skinDark} />

      {/* Mouth with fangs */}
      <rect x={40} y={px * 11} width={px * 5} height={px} fill={palette.mouth} />
      <rect x={40} y={px * 12} width={px} height={px} fill={palette.eyeWhite} />
      <rect x={72} y={px * 11} width={px} height={px} fill={palette.eyeWhite} />

      {/* Body */}
      <rect x={36} y={px * 13} width={px * 7} height={px} fill={palette.skinMid} />
      <rect x={32} y={px * 14} width={px * 8} height={px} fill={palette.skinLight} />
      <rect x={32} y={px * 15} width={px * 8} height={px} fill={palette.skinLight} />
      <rect x={32} y={px * 16} width={px * 8} height={px} fill={palette.skinMid} />

      {/* Arms */}
      <rect x={24} y={px * 14} width={px} height={px * 2} fill={palette.skinDark} />
      <rect x={16} y={px * 15} width={px} height={px} fill={palette.skinLight} />
      <rect x={96} y={px * 14} width={px} height={px * 2} fill={palette.skinDark} />
      <rect x={104} y={px * 15} width={px} height={px} fill={palette.skinLight} />

      {/* Legs */}
      <rect x={36} y={px * 17} width={px * 2} height={px * 2} fill={palette.skinDark} />
      <rect x={60} y={px * 17} width={px * 2} height={px * 2} fill={palette.skinDark} />
      <rect x={32} y={px * 19} width={px * 2} height={px} fill={palette.black} />
      <rect x={60} y={px * 19} width={px * 2} height={px} fill={palette.black} />
    </svg>
  );
};

export default SedrickIcon;

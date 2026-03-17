import React from 'react';

interface IconProps {
  /** Size (width/height) of the square icon in pixels. Defaults to 100. */
  size?: number;
  /** Optional class name for styling. */
  className?: string;
}

const FlexIcon: React.FC<IconProps> = ({ size = 100, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 640 512"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', margin: '0 auto', filter: 'drop-shadow(0px 0px 4px #ff1493)' }}
    >
      <path
        fill="#ff1493"
        d="M96 112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 112 256 0 0-112c0-26.5 21.5-48 48-48s48 21.5 48 48l0 16 16 0c26.5 0 48 21.5 48 48l0 48c17.7 0 32 14.3 32 32s-14.3 32-32 32l0 48c0 26.5-21.5 48-48 48l-16 0 0 16c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-112-256 0 0 112c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-16-16 0c-26.5 0-48-21.5-48-48l0-48c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-48c0-26.5 21.5-48 48-48l16 0 0-16z"
      />
    </svg>
  );
};

export default FlexIcon;
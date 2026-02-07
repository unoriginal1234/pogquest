import React from 'react';
import PogClass from '../classes/Pog';


interface PogProps {
  pog: PogClass;
  isSelected?: boolean;
  isBaddiePog?: boolean;
  onClick?: () => void;
  isFlippedUp: boolean;
}

// Right now I have added a tooltip, but I want to conditionally render this and provide more information
// based on the pog's level, strength, defense, and gold.

// I think generally I want to have the onClick come from the parent
const Pog: React.FC<PogProps> = ({ pog, isSelected, isBaddiePog, onClick, isFlippedUp }) => {

  if (isFlippedUp) {
    return (
      <div className="flipped-pog-component"></div>
    )
  };

  return (
    <div className="tooltip" data-tip="hi there">
      <div 
        className={`pog-component ${isSelected ? 'selected' : ''} ${isBaddiePog ? 'baddie-pog' : ''} tooltip`} 
        data-tip={`hi there`}
        onClick={onClick}
      >
        <div className="pog-name">{pog.getName()}</div>
        <div className="pog-subtitle">LVL {pog.getLevel()}</div>
      </div>
    </div>
  );
};

export default Pog;

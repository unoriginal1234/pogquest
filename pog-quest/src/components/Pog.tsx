import React from 'react';
import PogClass from '../classes/Pog';
import PogToolTip from './tooltips/pogToolTip';

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

  // TO DO: boons should add to the pogs ability and be a different color
  const tooltipText = `⚔️: ${pog.getStrength()}
🛡️: ${pog.getDefense()}
🪙: ${pog.getGold()}`;

  if (isFlippedUp) {
    return (
      <div className="flipped-pog-component"></div>
    )
  };

  return (
      <PogToolTip tooltipText={tooltipText}>
        <div 
          className={`pog-component ${isSelected ? 'selected' : ''} ${isBaddiePog ? 'baddie-pog' : ''} `} 
          onClick={onClick}
        >
          <div className="pog-name">{pog.getName()}</div>
          <div className="pog-subtitle">LVL {pog.getLevel()}</div>
        </div>
    </PogToolTip>
  );
};

export default Pog;

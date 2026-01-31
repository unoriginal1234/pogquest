import React from 'react';
import PogClass from '../classes/Pog';


interface PogProps {
  pog: PogClass;
  isSelected?: boolean;
  isBaddiePog?: boolean;
  onClick?: () => void;
}

// I think generally I want to have the onClick come from the parent
const Pog: React.FC<PogProps> = ({ pog, isSelected, isBaddiePog, onClick }) => {

  return (
    <div 
      className={`pog-component ${isSelected ? 'selected' : ''} ${isBaddiePog ? 'baddie-pog' : ''}`} 
      onClick={onClick}
    >
      <div className="pog-name">{pog.getName()}</div>
      <div className="pog-subtitle">LVL {pog.getLevel()}</div>
    </div>
  );
};

export default Pog;

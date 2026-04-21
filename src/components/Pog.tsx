import React from 'react';
import PogClass from '../classes/Pog';
import PogToolTip from './tooltips/pogToolTip';

import CombatPog from '../classes/pogClasses/CombatPog';
import ActionPog from '../classes/pogClasses/ActionPog';

interface PogProps {
  pog: PogClass;
  isSelected?: boolean;
  isBaddiePog?: boolean;
  onClick?: () => void;
  isFlippedUp: boolean;
}

// Right now I have added a tooltip, but I want to conditionally render this and provide more information
// based on the pog's level, strength, defense, and gold.

// There's some duplication for the lucky pogs, but we can cross that bridge if it gets too long

// I think generally I want to have the onClick come from the parent
const Pog: React.FC<PogProps> = ({ pog, isSelected, isBaddiePog, onClick, isFlippedUp }) => {

  let tooltipText = '';
  if (pog instanceof CombatPog) {
      // TO DO: boons should add to the pogs ability and be a different color

    tooltipText = `⚔️: ${pog.getStrength()}
🛡️: ${pog.getDefense()}
🪙: ${pog.getGold()}`;
  } else if (pog instanceof ActionPog) {
    tooltipText = `${pog.getDescription()}
🪙: ${pog.getGold()}`;
  }

  if (isFlippedUp) {
    return (
      <div className="flipped-pog-component"></div>
    )
  };

  if (pog instanceof CombatPog) {
    return (
        <PogToolTip tooltipText={tooltipText}>
          <div 
            className={`pog-component ${isSelected ? 'selected' : ''} ${isBaddiePog ? 'baddie-pog' : ''} `} 
            onClick={onClick}
          >
            <div className="pog-stat pog-attack">{pog.getStrength() || ''}</div>
            <div className="pog-name">{pog.getName()}</div>
            <div className="pog-ability">{
              pog.getAbility() === 'lucky' ? '🍀' : 
              pog.getAbility() === 'radical' ? '🤘' :
              ''}</div>
            <div className="pog-stat pog-defense">{pog.getDefense() || ''}</div>
          </div>
      </PogToolTip>
    );
  } else if (pog instanceof ActionPog) {
    return (
      <PogToolTip tooltipText={tooltipText}>
        <div 
          className={`pog-component action-pog ${isSelected ? 'selected' : ''} ${isBaddiePog ? 'baddie-pog' : ''} `} 
          onClick={onClick}
        >
          <div className="pog-name">{pog.getName()}</div>
          <div className="pog-ability">{
              pog.getAbility() === 'lucky' ? '🍀' : 
              ''}</div>
          <div className="pog-action">{
            pog.getAction() === 'double_attack' ? '💥' : 
            pog.getAction() === 'double_defense' ? '🛡️' : 
            pog.getAction() === 'pizza_5' ? '🍕5' :
            pog.getAction() === 'pizza_10' ? '🍕10' :
            ''
            }</div>
        </div>
      </PogToolTip>
    );
  }

  // if something renders blank unexpectedly, this is where to look
  return null;
};

export default Pog;

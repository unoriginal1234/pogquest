import Pog from "../Pog";

// Thinking through this - I want to either level up or use the Balatro method where you can 
// put specific wrappers around the pog to give it bonuses, this way I don't have to worry about "leveling up" the pog.
import type { Ability } from "../Pog";

export default class CombatPog extends Pog {
  strength: number;
  defense: number;

  constructor(name: string, strength: number, defense: number, gold: number, ability?: Ability) {
    super(name, gold, ability);
    this.strength = strength;
    this.defense = defense;
  }

  getStrength() {
    return this.strength;
  }
  
  getDefense() {
    return this.defense;
  }

  clone(): CombatPog {
    return new CombatPog(this.name, this.strength, this.defense, this.gold, this.ability);
  }
}
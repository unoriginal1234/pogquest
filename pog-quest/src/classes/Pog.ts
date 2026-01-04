export default class Pog {
  name: string;
  strength: number;
  defense: number;
  gold: number;
  level: number;
  

  constructor(name: string, strength: number, defense: number, gold: number, level: number) {
    this.name = name;
    this.strength = strength;
    this.defense = defense;
    this.gold = gold;
    this.level = level;
    
  }

  attack() {
    return this.strength;
  }
  
  defend() {
    return this.defense;
  }

  getGold() {
    return this.gold;
  }

  getLevel() {
    return this.level;
  }
}
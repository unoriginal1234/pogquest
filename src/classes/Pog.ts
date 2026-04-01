// Thinking through this - I want to either level up or use the Balatro method where you can 
// put specific wrappers around the pog to give it bonuses, this way I don't have to worry about "leveling up" the pog.
type Ability = "lucky" | "trick";

export default class Pog {
  _id: string;
  name: string;
  strength: number;
  defense: number;
  gold: number;
  level: number;
  startTime: Date;
  ownerId: string | undefined;
  ability: Ability | undefined;

  constructor(name: string, strength: number, defense: number, gold: number, level: number, ability?: Ability) {
    this._id = crypto.randomUUID();
    this.name = name;
    this.strength = strength;
    this.defense = defense;
    this.gold = gold;
    this.level = level;
    this.startTime = new Date();
    this.ownerId = undefined;
    this.ability = ability;
  }

  setAbility(ability: Ability) {
    this.ability = ability;
  }

  getAbility() {
    return this.ability;
  }

  getName() {
    return this.name;
  }

  generateNewId() {
    this._id = crypto.randomUUID();
  }

  getId() {
    return this._id;
  }

  getStrength() {
    return this.strength;
  }
  
  getDefense() {
    return this.defense;
  }

  getGold() {
    return this.gold;
  }

  getLevel() {
    return this.level;
  }

  levelUp() {
    if (this.level < 3) {  // max level is 10
    this.level++;
    this.strength++;
    this.defense++;
    this.gold++;
    }
  }

  clone(): Pog {
    return new Pog(this.name, this.strength, this.defense, this.gold, this.level, this.ability);
  }
}
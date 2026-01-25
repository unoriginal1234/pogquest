export default class Pog {
  _id: string;
  name: string;
  strength: number;
  defense: number;
  gold: number;
  level: number;
  startTime: Date;
  ownerId: string | undefined;

  constructor(name: string, strength: number, defense: number, gold: number, level: number) {
    this._id = crypto.randomUUID();
    this.name = name;
    this.strength = strength;
    this.defense = defense;
    this.gold = gold;
    this.level = level;
    this.startTime = new Date();
    this.ownerId = undefined;
  }

  getName() {
    return this.name;
  }

  getStartTime() {
    return this.startTime;
  }

  generateNewId() {
    this._id = crypto.randomUUID();
  }

  getId() {
    return this._id;
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

  levelUp() {
    if (this.level < 3) {  // max level is 10
    this.level++;
    this.strength++;
    this.defense++;
    this.gold++;
    }
  }
}
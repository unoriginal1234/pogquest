// Thinking through this - I want to either level up or use the Balatro method where you can 
// put specific wrappers around the pog to give it bonuses, this way I don't have to worry about "leveling up" the pog.
// export type Ability = "lucky" | "trick" | "radical";
export type Ability = "lucky" | "radical";

export default class Pog {
  _id: string;
  name: string;
  gold: number;
  ownerId: string | undefined;
  ability: Ability | undefined;

  constructor(name: string, gold: number, ability?: Ability) {
    this._id = crypto.randomUUID();
    this.name = name;
    this.gold = gold;
    this.ownerId = undefined;
    this.ability = ability;
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

  getGold() {
    return this.gold;
  }

  clone(): Pog {
    return new Pog(this.name, this.gold, this.ability);
  }

  setAbility(ability: Ability) {
    this.ability = ability;
  }

  getAbility(): Ability | undefined {
    return this.ability;
  }
}
import Pog from './Pog';
import Item from './Item';
import Archetype from './Archetype';
import Slammer from './Slammer';

export default class Player {
  name: string;
  pogs: Pog[];
  slammers: Slammer[];
  inventory: Item[];
  hitpoints: number;
  archetype: Archetype;
  level: number;
  _id: string;
  // boons: Boon[];
  // nerfs: Nerf[];

  constructor(name: string, archetype: Archetype) {
    
    this.name = name;
    this.pogs = archetype.basepogs;
    this.inventory =[];
    this.hitpoints = archetype.basehitpoints;
    this.archetype = archetype;
    this.level = 1;
    this.slammers = archetype.baseSlammers;
    this._id = "";
  } 

  getName() {
    return this.name;
  }

  setId(id: string) {
    this._id = id;
  }

  getId() {
    return this._id;
  }

  getArchetype() {
    return this.archetype;
  }

  getHitpoints() {
    return this.hitpoints;
  }

  setHitpoints(hitpoints: number) {
    this.hitpoints = hitpoints;
  }

  getInventory() {
    return this.inventory;
  }

  removeItem(item: Item) {
    this.inventory = this.inventory.filter(i => i !== item);
  }

  getPogs() {
    return this.pogs;
  }

  getPog(index: number) {
    return this.pogs[index];
  }

  getPogCount() {
    return this.pogs.length;
  }

  getLevel() {
    return this.level;
  }
}
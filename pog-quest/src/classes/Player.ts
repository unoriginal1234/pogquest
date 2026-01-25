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
  currentHitpoints: number;
  archetype: Archetype;
  level: number;
  _id: string;
  // boons: Boon[];
  // nerfs: Nerf[];

  constructor(name: string, archetype: Archetype) {
    
    this.name = name;
    this.pogs = archetype.basepogs;
    this.inventory = archetype.baseInventory;
    this.hitpoints = archetype.basehitpoints;
    this.currentHitpoints = this.hitpoints;
    this.archetype = archetype;
    this.level = 1;
    this.slammers = archetype.baseSlammers;
    this._id = crypto.randomUUID();
  } 

  getName() {
    return this.name;
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

  getCurrentHitpoints() {
    return this.currentHitpoints;
  }

  setCurrentHitpoints(currentHitpoints: number) {
    this.currentHitpoints = currentHitpoints;
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

  getSlammers() {
    return this.slammers;
  }

  getSlammer(index: number) {
    return this.slammers[index];
  }

  getSlammerCount() {
    return this.slammers.length;
  }

  getInventoryCount() {
    return this.inventory.length;
  }

  getInventoryItem(index: number) {
    return this.inventory[index];
  }
}
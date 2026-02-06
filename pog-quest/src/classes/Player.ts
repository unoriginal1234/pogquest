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
  defense: number;
  gold: number;
  experiencePoints: number;
  equippedSlammer: Slammer | undefined;

  constructor(name: string, archetype: Archetype) {
    this._id = crypto.randomUUID();
    this.name = name;
    this.pogs = [...archetype.basepogs];
    this.inventory = [...archetype.baseInventory];
    this.hitpoints = archetype.basehitpoints;
    this.currentHitpoints = this.hitpoints;
    this.archetype = archetype;
    this.level = 1;
    this.slammers = [...archetype.baseSlammers];
    this.defense = 0;
    this.gold = 10;
    this.experiencePoints = 0;
    this.equippedSlammer = this.slammers[0];

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

  addItem(item: Item) {
    this.inventory.push(item);
  }

  addSlammer(slammer: Slammer) {
    this.slammers.push(slammer);
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

  addPog(pog: Pog) {
    this.pogs.push(pog);
  }

  getLevel() {
    return this.level;
  }

  _setLevel(level: number) {
    this.level = level;
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

  equipSlammer(slammer: Slammer) {
    this.equippedSlammer = slammer;
  }

  equipSlammerById(id: string) {
    this.equippedSlammer = this.slammers.find(s => s.getId() === id);
  }

  getEquippedSlammer() {
    return this.equippedSlammer;
  }

  getInventoryCount() {
    return this.inventory.length;
  }

  getInventoryItem(index: number) {
    return this.inventory[index];
  }

  getDefense() {
    return this.defense;
  }

  setDefense(defense: number) {
    this.defense = defense;
  }

  getGold() {
    return this.gold;
  }  

  setGold(gold: number) {
    this.gold = gold;
  }

  getExperiencePoints() {
    return this.experiencePoints;
  }

  addExperiencePoints(experiencePoints: number) {
    this.experiencePoints += experiencePoints;
  }

  _levelsByExperiencePoints: { [key: number]: number } = {
    4: 1,
    8: 2,
    16: 3,
    32: 4,
    64: 5,
    128: 6,
    256: 7,
    512: 8,
    1024: 9,
  };

  _getLevelFromExperiencePoints(experiencePoints: number) {
    return this._levelsByExperiencePoints[experiencePoints];
  }

  

}
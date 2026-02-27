// Thinking through this - I might want a base slammer ability that returns if no slammer

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
  leveUpPerksReceived: number;

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
    this.leveUpPerksReceived = 1;
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

  removePog(pog: Pog) {
    this.pogs = this.pogs.filter(p => p.getId() !== pog.getId());
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

  _increaseHitpointsByLevel() {
    this.setHitpoints(Math.ceil(this.getHitpoints() * 1.2));
    this.setCurrentHitpoints(this.getHitpoints());
  }

  addExperiencePoints(experiencePoints: number) {
    this.experiencePoints += experiencePoints;
  }

  hasLeveledUp(): boolean {
    return this.getLevel() === this._getLevelFromExperiencePoints(this.getExperiencePoints());
  }

  levelUp() {
    if (!this.hasLeveledUp()) {
      this._setLevel(this.getLevel() + 1);
      this._increaseHitpointsByLevel();
    }
  }

  hasReceivedCurrentLevelUpPerks(): boolean {
    return this.getLeveUpPerksReceived() === this.getLevel();
  }

  getLeveUpPerksReceived() {
    return this.leveUpPerksReceived;
  }
  
  addToLeveUpPerksReceived() {
    this.leveUpPerksReceived++;
  }

  _levelsByExperiencePoints(key: number): number {
    if (key < 4) {
      return 1;
    } else if (key < 16) {
      return 2;
    } else if (key < 32) {
      return 3;
    } else if (key < 64) {
      return 4;
    } else if (key < 128) {
      return 5;
    } else if (key < 256) {
      return 6;
    } else if (key < 512) {
      return 7;
    } else if (key < 1024) {
      return 8;
    } else if (key < 2048) {
      return 9;
    } else {
      return 10;
    }
  }

  _getLevelFromExperiencePoints(experiencePoints: number) {
    return this._levelsByExperiencePoints(experiencePoints);
  }

  // I don't think this is needed anymore but I'll keep it for now
  setLevel() {
    this.level = this._getLevelFromExperiencePoints(this.getExperiencePoints());
  }

}
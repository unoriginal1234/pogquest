import Pog from './Pog';
import Item from './Item';
import Archetype from './Archetype';

export default class Player {
  name: string;
  pogs: Pog[];
  inventory: Item[];
  hitpoints: number;
  archetype: Archetype;
  

  constructor(name: string, archetype: Archetype) {
    
    this.name = name;
    this.pogs = archetype.basepogs;
    this.inventory =[];
    this.hitpoints = archetype.basehitpoints;
    this.archetype = archetype;
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

  getPog(index: number) {
    return this.pogs[index];
  }

  getPogCount() {
    return this.pogs.length;
  }
}
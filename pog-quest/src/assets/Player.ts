import Pog from './Pog';
import Item from './Item';

export default class Player {
  name: string;
  pogs: Pog[];
  inventory: Item[];
  hitpoints: number;

  constructor(name: string, pogs: Pog[], inventory: Item[], hitpoints: number) {
    this.name = name;
    this.pogs = pogs;
    this.inventory = inventory;
    this.hitpoints = hitpoints;
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
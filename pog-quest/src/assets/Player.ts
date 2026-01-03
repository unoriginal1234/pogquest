import Pog from './Pog';
import Item from './Item';

export default class Player {
  name: string;
  pogs: Pog[];
  inventory: Item[];

  constructor(name: string, pogs: Pog[], inventory: Item[]) {
    this.name = name;
    this.pogs = pogs;
    this.inventory = inventory;
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
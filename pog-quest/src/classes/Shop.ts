import Pog from './Pog';
import Item from './Item';
import Slammer from './Slammer';

export default class Shop {
    _id: string;
    name: string;
    description: string;
    inventory: Item[];
    pogs: Pog[];
    slammers: Slammer[];

    constructor(name: string, description: string, inventory: Item[], pogs: Pog[], slammers: Slammer[]) {
        this._id = crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.inventory = inventory;
        this.pogs = pogs;
        this.slammers = slammers;
    }

    getId() {
        return this._id;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getInventory() {
        return this.inventory;
    }

    getPogs() {
        return this.pogs;
    }
    
    getSlammers() {
        return this.slammers;
    }

    getPog(index: number) {
        return this.pogs[index];
    }

    getSlammer(index: number) {
        return this.slammers[index];
    }

    setInventory(inventory: Item[]) {
        this.inventory = inventory;
    }

    setPogs(pogs: Pog[]) {
        this.pogs = pogs;
    }

    setSlammers(slammers: Slammer[]) {
        this.slammers = slammers;
    }

    removeItem(item: Item) {
        this.inventory = this.inventory.filter(i => i.getId() !== item.getId());
    }

    removePog(pog: Pog) {
        this.pogs = this.pogs.filter(p => p.getId() !== pog.getId());
    }

    removeSlammer(slammer: Slammer) {
        this.slammers = this.slammers.filter(s => s.getId() !== slammer.getId());
    }
}
import Pog from './Pog';
import Slammer from './Slammer';
import Item from './Item';

export default class Archetype {
    type: string;
    description: string;
    basehitpoints: number;
    basepogs: Pog[];
    baseSlammers: Slammer[];
    baseInventory: Item[];

    constructor(type: string, description: string, basehitpoints: number, basepogs: Pog[], baseSlammers: Slammer[], baseInventory: Item[]) {
        this.type = type;
        this.description = description;
        this.basehitpoints = basehitpoints;
        this.basepogs = basepogs;
        this.baseSlammers = baseSlammers;
        this.baseInventory = baseInventory;
    }
}
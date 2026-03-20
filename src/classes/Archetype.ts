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
    levelUpOptions: { [key: number]: { pogs: Pog[] } };

    constructor(type: string, 
        description: string, 
        basehitpoints: number, 
        basepogs: Pog[], 
        baseSlammers: Slammer[], 
        baseInventory: Item[], 
        levelUpOptions: { [key: number]: { pogs: Pog[] } }) {

        this.type = type;
        this.description = description;
        this.basehitpoints = basehitpoints;
        this.basepogs = basepogs;
        this.baseSlammers = baseSlammers;
        this.baseInventory = baseInventory;
        this.levelUpOptions = levelUpOptions;
    }

    getLevelUpOptions() {
        return this.levelUpOptions;
    }

    // honestly chapter rewards should be on the Archetype class

}
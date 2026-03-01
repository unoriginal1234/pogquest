// Thinking through this - I want to be able to combine slammers to create a new slammer
import Pog from './Pog';

import type { Boon } from './types'

export default class Slammer {
    _id: string;
    name: string;
    description: string;
    level: number;
    gold: number;
    slamAbility: (stack: Pog[]) => { flippedStack: Pog[], remainingStack: Pog[], boons?: { [key: string]: Boon } };

    constructor(name: string, description: string, level: number, gold: number, slamAbility: (stack: Pog[]) => { flippedStack: Pog[], remainingStack: Pog[], boons?: { [key: string]: Boon } }) {
        this._id = crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.level = level;
        this.slamAbility = slamAbility;
        // TO DO: Add gold to the constructor
        this.gold = gold;
    }



    getId() {
        return this._id;
    }

    getGold() {
        return this.gold;
    }

    getLevel() {
        return this.level;
    }

    getDescription() {
        return this.description;
    }

    getName() {
        return this.name;
    }

    slam(stack: Pog[]) {
        return this.slamAbility(stack);
    }
}
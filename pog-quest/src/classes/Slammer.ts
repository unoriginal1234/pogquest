// Thinking through this - I want to be able to combine slammers to create a new slammer
import Pog from './Pog';

import type { Boon } from './types'

export type SlammerType = 'flipper' | 'beefer' | 'turtler';

export default class Slammer {
    _id: string;
    name: string;
    description: string;
    level: number;
    gold: number;
    slammerType: SlammerType;
    slamAbility: (stack: Pog[]) => { flippedStack: Pog[], remainingStack: Pog[], boons?: { [key: string]: Boon } };

    constructor(name: string, description: string, level: number, gold: number, slamAbility: (stack: Pog[]) => { flippedStack: Pog[], remainingStack: Pog[], boons?: { [key: string]: Boon } }, slammerType: SlammerType = 'flipper') {
        this._id = crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.level = level;
        this.slamAbility = slamAbility;
        this.gold = gold;
        this.slammerType = slammerType;
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

    getSlammerType(): SlammerType {
        return this.slammerType;
    }

    slam(stack: Pog[]) {
        return this.slamAbility(stack);
    }
}
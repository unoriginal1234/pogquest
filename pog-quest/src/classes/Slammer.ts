import Pog from './Pog';

export default class Slammer {
    _id: string;
    name: string;
    description: string;
    level: number;
    slamAbility: (stack: Pog[]) => { flippedStack: Pog[], remainingStack: Pog[] };

    constructor(name: string, description: string, level: number, slamAbility: (stack: Pog[]) => { flippedStack: Pog[], remainingStack: Pog[] }) {
        this._id = crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.level = level;
        this.slamAbility = slamAbility;
    }

    getId() {
        return this._id;
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
        this.slamAbility(stack);
    }

    
}
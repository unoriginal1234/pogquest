import Pog from './Pog';

export default class Baddie {
    name: string;
    pogs: Pog[];
    gold: number;
    level: number; // could have two levels for each "floor"

    constructor(name: string, pogs: Pog[], gold: number, level: number) {
        this.name = name;
        this.pogs = pogs;
        this.gold = gold;
        this.level = level;
    }

    getPogs() {
        return this.pogs;
    }

    getGold() {
        return this.gold;
    }

    getLevel() {
        return this.level;
    }
}
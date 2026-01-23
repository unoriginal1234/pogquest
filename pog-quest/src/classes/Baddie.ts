import Pog from './Pog';

export default class Baddie {
    _id: string;
    name: string;
    pogs: Pog[];
    gold: number;
    level: number; // could have two levels for each "floor"

    constructor(name: string, pogs: Pog[], gold: number, level: number) {
        this._id = crypto.randomUUID();
        this.name = name;
        this.pogs = pogs;
        this.gold = gold;
        this.level = level;
    }

    getId() {
        return this._id;
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

    fight(){
        // choose available pogs and maximize damage
        console.log("Baddie is fighting!");
    }
}
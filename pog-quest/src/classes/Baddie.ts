import Pog from './Pog';

export default class Baddie {
    _id: string;
    name: string;
    pogs: Pog[];
    gold: number;
    level: number; // could have two levels for each "floor"
    maxHitpoints: number;
    currentHitpoints: number;

    constructor(name: string, pogs: Pog[], gold: number, level: number) {
        this._id = crypto.randomUUID();
        this.name = name;
        this.pogs = pogs;
        this.gold = gold;
        this.level = level;
        this.maxHitpoints = 10;
        this.currentHitpoints = this.maxHitpoints;
    }

    getMaxHitpoints() {
        return this.maxHitpoints;
    }

    getCurrentHitpoints() {
        return this.currentHitpoints;
    }

    setCurrentHitpoints(currentHitpoints: number) {
        this.currentHitpoints = currentHitpoints;
    }

    takeDamage(damage: number) {
        this.currentHitpoints -= damage;
    }

    getId() {
        return this._id;
    }

    getName() {
        return this.name;
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
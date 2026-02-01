import Pog from './Pog';

export default class Baddie {
    _id: string;
    name: string;
    pogs: Pog[];
    gold: number;
    level: number; // could have two levels for each "floor"
    maxHitpoints: number;
    currentHitpoints: number;
    defense: number;

    constructor(name: string, pogs: Pog[], gold: number, level: number) {
        this._id = crypto.randomUUID();
        this.name = name;
        this.pogs = pogs;
        this.gold = gold;
        this.level = level;
        this.maxHitpoints = 10;
        this.currentHitpoints = this.maxHitpoints;
        this.defense = 0;
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

    getXPbyLevel() {
        return {
            1: 3, 
            2: 6, 
            3: 12, 
            4: 24, 
            5: 48, 
            6: 96, 
            7: 192, 
            8: 384, 
            9: 768, 
            10: 1536}[this.level];
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

    getDefense() {
        return this.defense;
    }

    setDefense(defense: number) {
        this.defense = defense;
    }
}
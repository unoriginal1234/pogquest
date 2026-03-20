import Pog from './Pog';

export type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export default class Baddie {
    _id: string;
    name: string;
    pogs: Pog[];
    gold: number;
    level: Level;
    maxHitpoints: number;
    currentHitpoints: number;
    defense: number;

    constructor(name: string, pogs: Pog[], gold: number, level: Level) {
        this._id = crypto.randomUUID();
        this.name = name;
        this.pogs = pogs;
        this.gold = gold;
        this.level = level;
        this.maxHitpoints = this.getMaxHitpointsByLevel() || 0;
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
            3: 10, 
            4: 20, 
            5: 40, 
            6: 80, 
            7: 160, 
            8: 320, 
            9: 640, 
            10: 1536}[this.level];
    }

    getMaxHitpointsByLevel() {
        return {
            1: 10,
            2: 20,
            3: 30,
            4: 40,
            5: 50,
            6: 60,
            7: 70,
            8: 80,
            9: 90,
            10: 100,
        }[this.level];
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
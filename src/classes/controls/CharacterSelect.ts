import Archetype from "../Archetype";
import Pog from "../Pog";
import Slammer from "../Slammer";
import { startingPogs } from "../../resources/startingPogs";
import Item from "../Item";
import demoSlammerAbility from "../../slammerResources/demoSlammerAbility";

import BullyLevelUpOptions from "../resources/BullyLevelUpOptions";

// TODO: Add level up options for other archetypes

export function createPogByInput({name, strength, defense}: {name: string, strength: number, defense: number}){
    const gold = Math.floor((8*strength + 7*defense));
    return new Pog(name, strength, defense, gold, 1);
}

export default class CharacterSelect {

    static skater = new Archetype(
        "Skater", 
        "Gnarly shredder.", 
        17, 
        [...startingPogs, createPogByInput({name: "Kick Flip", strength: 3, defense: 3})],
        // I should return the in game copy as part of the demo slammer ability
        [new Slammer("Radical Style", "Flips up 3 Pogs.", 1, 10, demoSlammerAbility)],
        [new Item("Participation Trophy", "1 Participation Award", 100)],
        BullyLevelUpOptions
    );

    static getSkater(): Archetype {
        return this.skater;
    }

    static fireworker = new Archetype(
        "Fireworker", 
        "Master of pop and awe.", 
        15, 
        [...startingPogs, createPogByInput({name: "Bottle Rocket", strength: 6, defense: 0})],
        [new Slammer("Blower Upper", "Flips up 3 Pogs.", 1, 10, demoSlammerAbility)],
        [new Item("Participation Trophy", "1 Participation Award", 100)],
        BullyLevelUpOptions
    );

    static getFireworker(): Archetype {
        return this.fireworker;
    }

    static bully = new Archetype(
        "Bully", 
        "Steals lunch money.", 
        19, 
        [...startingPogs, createPogByInput({name: "Tease", strength: 4, defense: 2})],
        [new Slammer("Jab", "Flips up 3 pogs.", 1, 10, demoSlammerAbility)],
        [new Item("Participation Trophy", "1 Participation Award", 100)],
        BullyLevelUpOptions
    );

    static getBully(): Archetype {
        return this.bully;
    }
}
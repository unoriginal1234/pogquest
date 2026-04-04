import Archetype from "../Archetype";
import Slammer from "../Slammer";
import { startingPogs } from "../../resources/startingPogs";
import Item from "../Item";
import demoSlammerAbility from "../../slammerResources/demoSlammerAbility";

import BullyLevelUpOptions from "../resources/BullyLevelUpOptions";
import SkaterLevelUpOptions from "../resources/SkaterLevelUpOptions";

// TODO: Add level up options for other archetypes

import { createPogByInput } from "../../resources/pilotDemo_001";

export default class CharacterSelect {

    static skater = new Archetype(
        "Skater", 
        "Gnarly shredder.", 
        17, 
        [...startingPogs, createPogByInput({name: "Kick Flip", strength: 2, defense: 3, ability: 'radical'})],
        // I should return the in game copy as part of the demo slammer ability
        [new Slammer("Radical Style", "Flips up 3 Pogs.", 1, 10, demoSlammerAbility)],
        [new Item("Participation Trophy", "1 Participation Award", 100)],
        SkaterLevelUpOptions
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
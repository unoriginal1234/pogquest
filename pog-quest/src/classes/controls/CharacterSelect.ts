import Archetype from "../Archetype";
import Pog from "../Pog";
import Slammer from "../Slammer";
import { startingPogs } from "../../resources/startingPogs";
import Item from "../Item";
import demoSlammerAbility from "../../slammerResources/demoSlammerAbility";

import BullyLevelUpOptions from "../resources/BullyLevelUpOptions";

// TODO: Add level up options for other archetypes

export default class CharacterSelect {

    static skater = new Archetype(
        "Skater", 
        "Gnarly shredder.", 
        17, 
        [...startingPogs, new Pog("Kick Flip", 5, 5, 5, 1)],
        // I should return the in game copy as part of the demo slammer ability
        [new Slammer("Radical Style", "Flips up 3 Pogs.", 1, demoSlammerAbility)],
        [new Item("Camera", "Replay last turn.", 100)],
        BullyLevelUpOptions
    );

    static getSkater(): Archetype {
        return this.skater;
    }

    static fireworker = new Archetype(
        "Fireworker", 
        "Master of pop and awe.", 
        15, 
        [...startingPogs, new Pog("Bottle Rocket", 10, 0, 10, 1)],
        [new Slammer("Blower Upper", "Flips up 3 Pogs.", 1, demoSlammerAbility)],
        [new Item("Lighter", "Fireworks deal 2 more damage till end of turn.", 100)],
        BullyLevelUpOptions
    );

    static getFireworker(): Archetype {
        return this.fireworker;
    }

    static bully = new Archetype(
        "Bully", 
        "Steals lunch money.", 
        19, 
        [...startingPogs, new Pog("Tease", 8, 0, 10, 1)],
        [new Slammer("Jab", "Packs a punch.", 1, demoSlammerAbility)],
        [new Item("Brick", "Deals 10 damage.", 100)],
        BullyLevelUpOptions
    );

    static getBully(): Archetype {
        return this.bully;
    }
}
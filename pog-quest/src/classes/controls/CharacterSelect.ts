import Archetype from "../Archetype";
import Pog from "../Pog";
import Slammer from "../Slammer";
import { startingPogs } from "../../resources/startingPogs";

export default class CharacterSelect {

    static skater = new Archetype(
        "Skater", 
        "Gnarly shredder.", 
        90, 
        [...startingPogs, new Pog("Kick Flip", 5, 5, 5, 1)],
        [new Slammer("Skate", "Flips up.", 1)],
    );

    static getSkater(): Archetype {
        return this.skater;
    }

    static fireworker = new Archetype(
        "Fireworker", 
        "Master of pop and awe.", 
        80, 
        [...startingPogs, new Pog("Bottle Rocket", 10, 10, 10, 1)],
        [new Slammer("Firework", "Throws a firework.", 1)]
    );

    static getFireworker(): Archetype {
        return this.fireworker;
    }

    static bully = new Archetype(
        "Bully", 
        "Steals lunch money.", 
        100, 
        [...startingPogs, new Pog("Tease", 10, 10, 10, 1)],
        [new Slammer("Bully", "Pushes someone down.", 1)]
    );

    static getBully(): Archetype {
        return this.bully;
    }
}
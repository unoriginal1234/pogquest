import Archetype from "../Archetype";
import Pog from "../Pog";
import Slammer from "../Slammer";
import { startingPogs } from "../../resources/startingPogs";
import Item from "../Item";

export default class CharacterSelect {

    static skater = new Archetype(
        "Skater", 
        "Gnarly shredder.", 
        90, 
        [...startingPogs, new Pog("Kick Flip", 5, 5, 5, 1)],
        [new Slammer("Radical Style", "Flips up.", 1)],
        [new Item("Camera", "Replay last turn.", 100)]
    );

    static getSkater(): Archetype {
        return this.skater;
    }

    static fireworker = new Archetype(
        "Fireworker", 
        "Master of pop and awe.", 
        80, 
        [...startingPogs, new Pog("Bottle Rocket", 10, 0, 10, 1)],
        [new Slammer("Blower Upper", "Blows up the stack.", 1)],
        [new Item("Lighter", "Fireworks deal 2 more damage till end of turn.", 100)]
    );

    static getFireworker(): Archetype {
        return this.fireworker;
    }

    static bully = new Archetype(
        "Bully", 
        "Steals lunch money.", 
        100, 
        [...startingPogs, new Pog("Tease", 8, 0, 10, 1)],
        [new Slammer("Jab", "Packs a punch.", 1)],
        [new Item("Brick", "Deals 10 damage.", 100)]
    );

    static getBully(): Archetype {
        return this.bully;
    }
}
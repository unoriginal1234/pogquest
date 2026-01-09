import Archetype from "../Archetype";
import Pog from "../Pog";

export default class CharacterSelect {

    static skater = new Archetype(
        "Skater", 
        "A skater is a character that can skate and jump.", 
        100, 
        [new Pog("Skate", 10, 10, 10, 1)]
    );

    static getSkater(): Archetype {
        return this.skater;
    }

    static fireworker = new Archetype(
        "Fireworker", 
        "A fireworker is a character that can fire and jump.", 
        100, 
        [new Pog("Fire", 10, 10, 10, 1)]
    );

    static getFireworker(): Archetype {
        return this.fireworker;
    }

    static bully = new Archetype(
        "Bully", 
        "A bully is a character that can bully and jump.", 
        100, 
        [new Pog("Bully", 10, 10, 10, 1)]
    );

    static getBully(): Archetype {
        return this.bully;
    }
}
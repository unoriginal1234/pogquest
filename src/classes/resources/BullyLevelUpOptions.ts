// import Slammer from "../Slammer";
// import Item from "../Item";
// import Player from "../Player";
// TODO: Add the ability to level up slammers and items

import { createCombatPogByInput } from "../../resources/pilotDemo_001";

const BullyLevelUpOptions = {
    2: {
        pogs: [createCombatPogByInput({name: "Noogie", strength: 3, defense: 1}), 
            createCombatPogByInput({name: "Sand Slap", strength: 1, defense: 3})],
    },
    3: {
        pogs: [createCombatPogByInput({name: "Hook Kick", strength: 5, defense: 3}), 
            createCombatPogByInput({name: "Pebble Chuck", strength: 3, defense: 5})],
    },
    4: {
        pogs: [createCombatPogByInput({name: "Titty Twist", strength: 7, defense: 5}), 
            createCombatPogByInput({name: "Shoulder Slam", strength: 5, defense: 7})],
    },
    5: {
        pogs: [createCombatPogByInput({name: "Crazy Slap", strength: 9, defense: 7}), 
            createCombatPogByInput({name: "Slurpee", strength: 7, defense: 11})],
    },
    6: {
        pogs: [createCombatPogByInput({name: "Kidney Punch", strength: 11, defense: 7}), 
            createCombatPogByInput({name: "Bush Did", strength: 9, defense: 11})],
    }, 
    7: {
        pogs: [createCombatPogByInput({name: "Knucle", strength: 13, defense: 9}), 
            createCombatPogByInput({name: "Tattoo", strength: 9, defense: 13})],
    },
    8: {
        pogs: [createCombatPogByInput({name: "Spinning Fist", strength: 15, defense: 11}), 
            createCombatPogByInput({name: "Big Boot", strength: 11, defense: 15})],
    },
    9: {
        pogs: [createCombatPogByInput({name: "Full Frontal Slam", strength: 17, defense: 10}), 
            createCombatPogByInput({name: "Underkick", strength: 10, defense: 17})],
    },
    10: {
        pogs: [createCombatPogByInput({name: "Neck Snap", strength: 20, defense: 10}), 
            createCombatPogByInput({name: "Spine Kick", strength: 10, defense: 20})],
    },
};

export default BullyLevelUpOptions;
// import Slammer from "../Slammer";
// import Item from "../Item";
// import Player from "../Player";
// TODO: Add the ability to level up slammers and items

import { createPogByInput } from "../../resources/pilotDemo_001";

const BullyLevelUpOptions = {
    2: {
        pogs: [createPogByInput({name: "Nose Slide", strength: 3, defense: 1, ability: 'radical'}), 
            createPogByInput({name: "Sand Slap", strength: 1, defense: 3})],
    },
    3: {
        pogs: [createPogByInput({name: "Hook Kick", strength: 5, defense: 3}), 
            createPogByInput({name: "Pebble Chuck", strength: 3, defense: 5})],
    },
    4: {
        pogs: [createPogByInput({name: "Spoonman", strength: 7, defense: 5}), 
            createPogByInput({name: "Bold Shoulder", strength: 5, defense: 7})],
    },
    5: {
        pogs: [createPogByInput({name: "Crazy Slap", strength: 9, defense: 7}), 
            createPogByInput({name: "Slurpee", strength: 7, defense: 11})],
    },
    6: {
        pogs: [createPogByInput({name: "Groovie Ghoulie", strength: 11, defense: 7}), 
            createPogByInput({name: "Bush Did", strength: 9, defense: 11})],
    }, 
    7: {
        pogs: [createPogByInput({name: "Knucle", strength: 13, defense: 9}), 
            createPogByInput({name: "Tattoo", strength: 9, defense: 13})],
    },
    8: {
        pogs: [createPogByInput({name: "Spinning Nimrod", strength: 15, defense: 11}), 
            createPogByInput({name: "Big Boot", strength: 11, defense: 15})],
    },
    9: {
        pogs: [createPogByInput({name: "Full Frontal Slam", strength: 17, defense: 10}), 
            createPogByInput({name: "Underkick", strength: 10, defense: 17})],
    },
    10: {
        pogs: [createPogByInput({name: "Neck Snap", strength: 20, defense: 10}), 
            createPogByInput({name: "Backflip Kick", strength: 10, defense: 20})],
    },
};

export default BullyLevelUpOptions;
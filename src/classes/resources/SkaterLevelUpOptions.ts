// import Slammer from "../Slammer";
// import Item from "../Item";
// import Player from "../Player";
// TODO: Add the ability to level up slammers and items

import { createPogByInput } from "../../resources/pilotDemo_001";

const BullyLevelUpOptions = {
    2: {
        pogs: [createPogByInput({name: "Nose Slide", strength: 3, defense: 0, ability: 'radical'}), 
            createPogByInput({name: "Nose Grab", strength: 1, defense: 4})],
    },
    3: {
        pogs: [createPogByInput({name: "50-50", strength: 5, defense: 0, ability: 'radical'}), 
            createPogByInput({name: "Grip Tape", strength: 1, defense: 6})],
    },
    4: {
        pogs: [createPogByInput({name: "Spoon Man", strength: 7, defense: 0, ability: 'radical'}), 
            createPogByInput({name: "Big Air", strength: 2, defense: 9})],
    },
    5: {
        pogs: [createPogByInput({name: "360 Flip", strength: 9, defense: 0, ability: 'radical'}), 
            createPogByInput({name: "Slurpee", strength: 7, defense: 11})],
    },
    6: {
        pogs: [createPogByInput({name: "Big Spin", strength: 11, defense: 0, ability: 'radical'}), 
            createPogByInput({name: "Bush Did", strength: 9, defense: 11})],
    }, 
    7: {
        pogs: [createPogByInput({name: "Pressure Flip", strength: 13, defense: 0, ability: 'radical'}), 
            createPogByInput({name: "Dark Slide", strength: 3, defense: 15})],
    },
    8: {
        pogs: [createPogByInput({name: "Nollie 360 Flip", strength: 15, defense: 0, ability: 'radical'}), 
            createPogByInput({name: "Block", strength: 0, defense: 20})],
    },
    9: {
        pogs: [createPogByInput({name: "Full Frontal Slam", strength: 17, defense: 0, ability: 'radical'}), 
            createPogByInput({name: "Impos Sible", strength: 5, defense: 23})],
    },
    10: {
        pogs: [createPogByInput({name: "Board Snap", strength: 20, defense: 0, ability: 'radical'}), 
            createPogByInput({name: "Backflip Kick", strength: 0, defense: 25})],
    },
};

export default BullyLevelUpOptions;
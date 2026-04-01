import { createPogByInput } from "../classes/controls/CharacterSelect";

export const startingPogs = [
    createPogByInput({name: "Attack", strength: 2, defense: 0}),
    createPogByInput({name: "Attack", strength: 2, defense: 0}),
    createPogByInput({name: "Block", strength: 0, defense: 2}),
]
import { createCombatPogByInput } from "./pilotDemo_001";

export const startingPogs = [
    createCombatPogByInput({name: "Attack", strength: 2, defense: 0}),
    createCombatPogByInput({name: "Attack", strength: 2, defense: 0}),
    createCombatPogByInput({name: "Block", strength: 0, defense: 2}),
]
import Pog from './Pog';

export default class Archetype {
    type: string;
    description: string;
    basehitpoints: number;
    basepogs: Pog[];

    constructor(type: string, description: string, basehitpoints: number, basepogs: Pog[]) {
        this.type = type;
        this.description = description;
        this.basehitpoints = basehitpoints;
        this.basepogs = basepogs;
    }
}
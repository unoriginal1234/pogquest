export default class Slammer {
    name: string;
    description: string;
    level: number;

    constructor(name: string, description: string, level: number) {
        this.name = name;
        this.description = description;
        this.level = level;
    }

    getLevel() {
        return this.level;
    }

    getDescription() {
        return this.description;
    }

    getName() {
        return this.name;
    }

    
}
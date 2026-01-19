export default class Slammer {
    _id: string;
    name: string;
    description: string;
    level: number;

    constructor(name: string, description: string, level: number) {
        this._id = crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.level = level;
    }

    getId() {
        return this._id;
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
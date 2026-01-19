export default class Adventure {
    _id: string;
    name: string;
    description: string;
    effect: string;

    constructor(name: string, description: string, effect: string) {
        this._id = crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.effect = effect;
    }
}
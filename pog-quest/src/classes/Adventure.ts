const adventureTemplateRegistry = {
    campfire: "A campfire is burning in the middle of the road. You can sit by the fire and rest.",
    chase: "You are being chased by a monster. You need to escape.",
    chest: "You found a chest. You can open it to get a reward.",
    trade: "You found a trader. You can trade with them to get a reward.",
};

type AdventureTemplate = keyof typeof adventureTemplateRegistry;

export default class Adventure {
    _id: string;
    name: string;
    description: string;
    template: AdventureTemplate;

    constructor(name: string, description: string, template: AdventureTemplate) {
        this._id = crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.template = template;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getTemplate() {
        return this.template;
    }

    getTemplateDescription() {
        return adventureTemplateRegistry[this.template];
    }
}




import Pog from "../Pog";

export type Action = "double_defense" | "double_attack" | "pizza_5" | "pizza_10"

export default class ActionPog extends Pog {
    action: Action;
    description: string;

    constructor(name: string, gold: number, action: Action, description: string) {
        super(name, gold);
        this.action = action;
        this.description = description;
    }

    setAction(action: Action) {
        this.action = action;
    }

    getAction(): Action {
        return this.action;
    }

    getDescription(): string {
        return this.description;
    }

    clone(): ActionPog {
        return new ActionPog(this.name, this.gold, this.action, this.description);
    }
}
import Pog from "../Pog";

export type Action = "double_defense" | "double_attack"

export default class ActionPog extends Pog {
    action: Action;

    constructor(name: string, gold: number, action: Action) {
        super(name, gold);
        this.action = action;
    }

    setAction(action: Action) {
        this.action = action;
    }

    getAction(): Action {
        return this.action;
    }

    clone(): ActionPog {
        return new ActionPog(this.name, this.gold, this.action);
    }
}
import Pog from "../classes/Pog";
import type { Boon } from "../classes/types";

export default function demoSlammerAbility(stack: Pog[]) {
    const flippedStack = stack.slice(0, 3);
    const remainingStack = stack.slice(3);
    const boons: { [key: string]: Boon } = {
        'beefer': {
            name: 'beefer',
            description: 'Increases pog strength by 1 for 1 turn.',
            value: 1,
            duration: 1,
        }
    };

    return { flippedStack, remainingStack, boons };
}   
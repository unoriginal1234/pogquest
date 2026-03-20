import Pog from "../classes/Pog";
import type { Boon } from "../classes/types";

export default function beeferSlammerAbilityByInput(value: number, duration: number) 
{
    return function demoSlammerAbility(stack: Pog[]) {
    const flippedStack = stack.slice(0, 3);
    const remainingStack = stack.slice(3);
    const boons: { [key: string]: Boon } = {
        'beefer': {
            name: 'beefer',
            description: 'Increases pog strength by 1 for 1 turn.',
            value: value,
            duration: duration,
        }
    };

    return { flippedStack, remainingStack, boons };
}   }
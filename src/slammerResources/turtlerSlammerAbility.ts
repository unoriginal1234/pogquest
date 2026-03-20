import Pog from "../classes/Pog";
import type { Boon } from "../classes/types";

export default function turtlerSlammerAbility(value: number, duration: number) 
{
    return function turtlerAbility(stack: Pog[]) {
    const flippedStack = stack.slice(0, 3);
    const remainingStack = stack.slice(3);
    const boons: { [key: string]: Boon } = {
        'turtler': {
            name: 'turtler',
            description: 'Increases player defense by ' + value + ' for ' + duration + ' turn(s).',
            value: value,
            duration: duration,
        }
    };

    return { flippedStack, remainingStack, boons };
}   }

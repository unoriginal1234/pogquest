import Pog from "../classes/Pog";
import type { Boon } from "../classes/types";

type MasterDemoSlammer = {
    flips: number;
    boonMaker?: BoonMaker[];
    duration?: number;
}

type BoonMaker = {
    name: 'beefer' | 'turtler';
    value: number;
}

export default function masterDemoSlammer({flips, boonMaker, duration}: MasterDemoSlammer) {

    return function masterDemoSlammerAbility(stack: Pog[]) {
        const flippedStack = stack.slice(0, flips);
        const remainingStack = stack.slice(flips);

        if (!boonMaker) {
            return { flippedStack, remainingStack };
        }

        const boons: { [key: string]: Boon }= boonMaker?.reduce((acc, boon) => {
            acc[boon.name] = {
                name: boon.name,
                description: `Grants ${boon.name} x ${boon.value} for ${duration} turn(s).`,
                value: boon.value,
                duration: duration ?? 1, // Default to 1 turn if no duration is provided
            };
            return acc;
        }, {} as { [key: string]: Boon });

        return { flippedStack, remainingStack, boons };
    }   
}
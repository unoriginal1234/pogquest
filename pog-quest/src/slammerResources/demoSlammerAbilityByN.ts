import Pog from "../classes/Pog";

export default function demoSlammerAbilityByN(n: number) {
    return function demoSlammerAbility(stack: Pog[]) {
        const flippedStack = stack.slice(0, n + 2);
        const remainingStack = stack.slice(n + 2);
        return { flippedStack, remainingStack };
    }   
}

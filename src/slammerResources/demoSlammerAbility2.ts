import Pog from "../classes/Pog";

export default function demoSlammerAbility2(stack: Pog[]) {
    const flippedStack = stack.slice(0, 4);
    const remainingStack = stack.slice(4);
    return { flippedStack, remainingStack };
}   
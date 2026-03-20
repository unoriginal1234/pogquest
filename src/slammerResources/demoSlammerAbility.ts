import Pog from "../classes/Pog";

export default function demoSlammerAbility(stack: Pog[]) {
    const flippedStack = stack.slice(0, 3);
    const remainingStack = stack.slice(3);
    

    return { flippedStack, remainingStack };
}   
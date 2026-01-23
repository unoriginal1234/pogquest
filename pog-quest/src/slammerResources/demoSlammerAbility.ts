import Pog from "../classes/Pog";

export default function demoSlammerAbility(stack: Pog[]) {
    console.log("Demo slammer ability!");
    const flippedStack = stack.slice(0, 2);
    const remainingStack = stack.slice(2);
    return { flippedStack, remainingStack };
}   
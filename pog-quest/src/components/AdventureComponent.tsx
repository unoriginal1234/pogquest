import { useState } from "react";

import AdventureClass from "../classes/Adventure";
import PlayerClass from "../classes/Player";
import PogClass from "../classes/Pog";

import CampfireComponent from "./adventureTemplateComponents/CampfireComponent";
import ChaseComponent from "./adventureTemplateComponents/ChaseComponent";
import ChestComponent from "./adventureTemplateComponents/ChestComponent";
import TradeComponent from "./adventureTemplateComponents/TradeComponent";

// ToDo: move this to the factory directory
function createPog(n: number, name: string) {
    return new PogClass(name, n, 1, n, 1);
}

export default function AdventureComponent({ adventure, player }: { adventure: AdventureClass, player: PlayerClass }) {

    const template = adventure.getTemplate();
    const isComplete = adventure.getIsComplete();
    const [hasRested, setHasRested] = useState(false);
    const [isChaseResolved, setIsChaseResolved] = useState(false);
    const [isChestOpened, setIsChestOpened] = useState(false);
    const [isTradeCompleted, setIsTradeCompleted] = useState(false);

    const tradePog = createPog(10, "Trade Pog");

    function handleRest() {
        player.setCurrentHitpoints(player.getCurrentHitpoints() + 10);
        setHasRested(true);
        adventure.setIsComplete(true);
    }

    function resolveChase() {
        player.setCurrentHitpoints(player.getCurrentHitpoints() - 5);
        setIsChaseResolved(true);
        adventure.setIsComplete(true);
    }

    function openChest() {
        setIsChestOpened(true);
        adventure.setIsComplete(true);
        player.addPog(createPog(3, "Chest Pog"));
    }

    function trade() {
        setIsTradeCompleted(true);
        adventure.setIsComplete(true);
        player.addPog(tradePog);
    }

    if (template === 'campfire' && !isComplete) {
        return (
            <CampfireComponent adventure={adventure} handleRest={handleRest} hasRested={hasRested} />
        );
    } else if (template === 'campfire' && isComplete) {
        return (
            <p>Good campfire!</p>
        );
    }

    if (template === 'chase' && !isComplete) {
        return (
            <ChaseComponent adventure={adventure} resolveChase={resolveChase} isChaseResolved={isChaseResolved} />
        );
    } else if (template === 'chase' && isComplete) {
        return (
            <p>You escaped, but took a hit!</p>
        );
    }

    if (template === 'chest' && !isComplete) {
        return (
            <ChestComponent adventure={adventure} openChest={openChest} isChestOpened={isChestOpened} />
        );
    } else if (template === 'chest' && isComplete) {
        return (
            <p>You opened the chest and got a pog!</p>
        );
    }

    if (template === 'trade' && !isComplete) {
        return (
            <TradeComponent adventure={adventure} trade={trade} isTradeCompleted={isTradeCompleted} player={player} tradePog={tradePog} />
        );
    } else if (template === 'trade' && isComplete) {
        return (
            <p>You traded with the trader and got a pog!</p>
        );
    }

    return <p>Unknown adventure template</p>;
}
import { useState } from "react";

import AdventureClass from "../classes/Adventure";
import PlayerClass from "../classes/Player";
import PogClass from "../classes/Pog";

import CampfireComponent from "./adventureTemplateComponents/CampfireComponent";
import ChaseComponent from "./adventureTemplateComponents/ChaseComponent";
import ChestComponent from "./adventureTemplateComponents/ChestComponent";

function createPog() {
    return new PogClass("Chest Pog", 1, 1, 1, 1);
}

// I want to create a pog factory that I can use here to create a pog for the chest.


export default function AdventureComponent({ adventure, player }: { adventure: AdventureClass, player: PlayerClass }) {

    const template = adventure.getTemplate();
    const isComplete = adventure.getIsComplete();
    const [hasRested, setHasRested] = useState(false);
    const [isChaseResolved, setIsChaseResolved] = useState(false);
    const [isChestOpened, setIsChestOpened] = useState(false);

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
        player.addPog(createPog());
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

    if (template === 'trade') {
        return (
            <div>
                <h1>Adventure</h1>
                <p>{adventure.getName()}</p>
                <p>{adventure.getDescription()}</p>
                <p>{adventure.getTemplateDescription()}</p>
                <p>I think that this could be very cool, but I need to figure out how to implement it.</p>
            </div>
        );
    }

    return <p>Unknown adventure template</p>;
}
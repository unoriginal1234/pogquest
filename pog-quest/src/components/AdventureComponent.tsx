import AdventureClass from "../classes/Adventure";
import PlayerClass from "../classes/Player";
import CampfireComponent from "./adventureTemplateComponents/CampfireComponent";
import { useState } from "react";

export default function AdventureComponent({ adventure, player }: { adventure: AdventureClass, player: PlayerClass }) {

    const template = adventure.getTemplate();
    const isComplete = adventure.getIsComplete();
    const [hasRested, setHasRested] = useState(false);

    function handleRest() {
        player.setCurrentHitpoints(player.getCurrentHitpoints() + 10);
        setHasRested(true);
        adventure.setIsComplete(true);
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

    if (template === 'chase') {
        return (
            <div>
                <h1>Adventure</h1>
                <p>{adventure.getName()}</p>
                <p>{adventure.getDescription()}</p>
                <p>{adventure.getTemplateDescription()}</p>
            </div>
        );
    }

    if (template === 'chest') {
        return (
            <div>
                <h1>Adventure</h1>
                <p>{adventure.getName()}</p>
                <p>{adventure.getDescription()}</p>
                <p>{adventure.getTemplateDescription()}</p>
            </div>
        );
    }

    if (template === 'trade') {
        return (
            <div>
                <h1>Adventure</h1>
                <p>{adventure.getName()}</p>
                <p>{adventure.getDescription()}</p>
                <p>{adventure.getTemplateDescription()}</p>
            </div>
        );
    }

    return <p>Unknown adventure template</p>;
}
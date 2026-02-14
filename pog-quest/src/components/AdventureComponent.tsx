import AdventureClass from "../classes/Adventure";
import PlayerClass from "../classes/Player";
import { useState } from "react";

export default function AdventureComponent({ adventure, player }: { adventure: AdventureClass, player: PlayerClass }) {

    const template = adventure.getTemplate();

    const [hasRested, setHasRested] = useState(false);

    function handleRest() {
        player.setCurrentHitpoints(player.getCurrentHitpoints() + 10);
        setHasRested(true);
    }

    if (template === 'campfire') {
        return (
            <div>
                <h1>Adventure</h1>
                <p>{adventure.getName()}</p>
                <p>{adventure.getDescription()}</p>
                <p>{adventure.getTemplateDescription()}</p>
                <button onClick={handleRest} disabled={hasRested}>Rest</button>
            </div>
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
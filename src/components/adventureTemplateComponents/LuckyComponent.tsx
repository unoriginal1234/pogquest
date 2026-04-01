import { useState } from "react";

import AdventureClass from "../../classes/Adventure";
import PlayerClass from "../../classes/Player";
import PogClass from "../../classes/Pog";

import PogComponent from "../Pog";

export default function LuckyComponent({ 
    adventure, makeLucky, isLuckyCompleted, player }: { 
        adventure: AdventureClass, 
        makeLucky: (pog: PogClass) => void, 
        isLuckyCompleted: boolean, 
        player: PlayerClass }) {

    const pogs = player.getPogs().filter(pog => pog.getAbility() !== 'lucky');
    const [selectedPog, setSelectedPog] = useState<PogClass | null>(null);

    function handlePogClick(pog: PogClass) {
        setSelectedPog(pog);
    }

    if (isLuckyCompleted) {
        return (
            <div>
                <h2>{adventure.getName()}</h2>
                <p>Your pog glows with luck!</p>
            </div>
        );
    }

    return (
        <div>
            <h2>{adventure.getName()}</h2>
            <p>{adventure.getDescription()}</p>
            <p>{adventure.getTemplateDescription()}</p>

            <button 
                onClick={() => makeLucky(selectedPog!)} 
                disabled={!selectedPog}
            >
                Make Lucky
            </button>

            <div>
                <h2>Your Pogs</h2>
                <div className="pog-grid">
                    {pogs.map((pog: PogClass) => (
                        <PogComponent 
                            key={pog.getId()} 
                            pog={pog} 
                            isFlippedUp={false} 
                            onClick={() => handlePogClick(pog)} 
                            isSelected={selectedPog?.getId() === pog.getId()}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

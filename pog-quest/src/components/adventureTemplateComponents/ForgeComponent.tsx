import { useState } from "react";

import AdventureClass from "../../classes/Adventure";
import PlayerClass from "../../classes/Player";
import SlammerClass from "../../classes/Slammer";

import SlammerComponent from "../SlammerComponent";
import SlammersCollection from "../SlammersCollection";

export default function ForgeComponent({ adventure, forge, isForgeCompleted, player }: { 
    adventure: AdventureClass, 
    forge: (slammer1: SlammerClass, slammer2: SlammerClass) => void, 
    isForgeCompleted: boolean,
    player: PlayerClass 
}) {
    const [slot1, setSlot1] = useState<SlammerClass | null>(null);
    const [slot2, setSlot2] = useState<SlammerClass | null>(null);

    function handleSlammerClick(slammer: SlammerClass) {
        if (!slot1) {
            setSlot1(slammer);
        } else if (!slot2) {
            setSlot2(slammer);
        }
    }

    function handleSlotClick(slot: 1 | 2) {
        if (slot === 1) setSlot1(null);
        else setSlot2(null);
    }

    function handleForge() {
        if (slot1 && slot2) {
            forge(slot1, slot2);
            setSlot1(null);
            setSlot2(null);
        }
    }

    const excludeIds = [slot1?.getId(), slot2?.getId()].filter(Boolean) as string[];
    const canForge = slot1 !== null && slot2 !== null;

    if (isForgeCompleted) {
        return (
            <div>
                <h2>{adventure.getName()}</h2>
                <p>The forge glows with power. A new slammer has been created!</p>
            </div>
        );
    }

    return (
        <div>
            <h2>{adventure.getName()}</h2>
            <p>{adventure.getDescription()}</p>
            <p>{adventure.getTemplateDescription()}</p>

            <div className="forge-slots-container">
                <div className="forge-slot" onClick={() => slot1 && handleSlotClick(1)}>
                    {slot1 
                        ? <SlammerComponent slammer={slot1} /> 
                        : <span className="forge-slot-label">Slammer 1</span>}
                </div>

                <span className="forge-plus">+</span>

                <div className="forge-slot" onClick={() => slot2 && handleSlotClick(2)}>
                    {slot2 
                        ? <SlammerComponent slammer={slot2} /> 
                        : <span className="forge-slot-label">Slammer 2</span>}
                </div>
            </div>

            <button 
                className="forge-button" 
                disabled={!canForge} 
                onClick={handleForge}
            >
                Forge
            </button>

            <SlammersCollection 
                player={player} 
                onSlammerClick={handleSlammerClick}
                excludeIds={excludeIds}
                hideControls={true}
            />
        </div>
    );
}

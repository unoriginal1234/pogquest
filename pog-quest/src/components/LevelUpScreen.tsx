import { useState } from "react";

import PogClass from "../classes/Pog";
import PogComponent from "./Pog";
import PlayerClass from "../classes/Player";

interface LevelUpScreenProps {
    levelUpOptions: { [key: number]: { pogs: PogClass[] } };
    newLevel: number;
    setLevelUp: (levelUp: boolean) => void;
    player: PlayerClass;
    setPlayerNeedsToLevelUp: (playerNeedsToLevelUp: boolean) => void;

}

export default function LevelUpScreen({levelUpOptions, newLevel, setLevelUp, player, setPlayerNeedsToLevelUp}: LevelUpScreenProps) {

    // right now I'm separating the level up from receiving the perks -- need to double check both before letting the player proceed
    
    const [openMenuPogId, setOpenMenuPogId] = useState<string | null>(null);

    function handlePogClick(pogId: string) {
        setOpenMenuPogId(openMenuPogId === pogId ? null : pogId);
    }

    function handleSelectPog(pog: PogClass) {
        player.addPog(pog);
        setOpenMenuPogId(null);
        setLevelUp(false);
        setPlayerNeedsToLevelUp(player.hasLeveledUp());
        player.addToLeveUpPerksReceived();
    }

    return (
        <div className="level-up-container">
            <div className="level-up-header">
                <h1>Level Up!</h1>
                <p className="pog-glow-green">You reached level {newLevel}</p>
                <p className="pog-glow-blue">Choose a new pog to add to your collection:</p>
            </div>

            <div className="shop-grid">
                {levelUpOptions[newLevel].pogs.map((pog: PogClass) => (
                    <div key={pog.getId()} className="shop-card relative">
                        <PogComponent 
                            pog={pog} 
                            isFlippedUp={false} 
                            onClick={() => handlePogClick(pog.getId())} 
                            isSelected={openMenuPogId === pog.getId()}
                        />
                        {openMenuPogId === pog.getId() && (
                            <div
                                className="menu menu-sm rounded-box bg-base-200 shadow-lg absolute left-1/2 -translate-x-1/2 mt-2 z-20 p-2"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    className="btn btn-ghost btn-sm justify-start"
                                    onClick={() => handleSelectPog(pog)}
                                >
                                    Select
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
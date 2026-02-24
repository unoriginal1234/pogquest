import { useState } from "react";

import Pog from "../classes/Pog";
import PogComponent from "./Pog";

export default function LevelUpScreen({levelUpOptions, newLevel, setLevelUp}: { levelUpOptions: { [key: number]: { pogs: Pog[] } }, newLevel: number, setLevelUp: (levelUp: boolean) => void }) {
    
    const [selectedPog, setSelectedPog] = useState<Pog | null>(null);

    function handlePogClick(pog: Pog) {
        setSelectedPog(pog);
    }


    return (
        <div>
            <h1>Level Up</h1>

            {levelUpOptions[newLevel].pogs.map((pog: Pog) => (
                <div key={pog.getId()}>
                    <h2>{pog.getName()}</h2>
                    <PogComponent pog={pog} isFlippedUp={false} onClick={() => handlePogClick(pog)} isSelected={selectedPog?.getId() === pog.getId()} />
                </div>
            ))}
            <button onClick={() => setLevelUp(false)}>Close</button>
        </div>
    );
}
import { useState } from 'react';

import Player from '../classes/Player';
import PogClass from '../classes/Pog';

import Pog from './Pog';

function PogCollection(
    {player, togglePogCollection }: 
    {player: Player | null, togglePogCollection: () => void}) {
    
    const [selectedPog, setSelectedPog] = useState<string | null>(null);

    function handlePogClick(id: string) {
        setSelectedPog(id);
    }

    const pog = player?.getPogs().find(p => p.getId() === selectedPog);

    return (
        <section className="demo-section pog-border">
            <h2>Pog Collection</h2>
            
            <div className="button-group">
                {player?.getPogs().map((pog: PogClass, index: number) => (
                    <Pog 
                        key={index} 
                        pog={pog} 
                        onClick={() => handlePogClick(pog.getId())}
                        isSelected={selectedPog === pog.getId()}
                    />
                ))}
            </div>

            {selectedPog && <PogDetails pog={pog} />}

            <button onClick={togglePogCollection}>Back</button>
        </section>
    );
}

function PogDetails({pog}: {pog: PogClass | undefined}) {

    const name = pog?.name;
    const strength = pog?.strength;
    const defense = pog?.defense;
    
    if (!pog) {
        return null;
    }

    return (
        <div className="pog-details demo-section">
            <h3>{name}</h3>
            {typeof strength === "number" && strength > 0 ? <p>Strength: {strength}</p> : null}
            {typeof defense === "number" && defense > 0 ? <p>Defense: {defense}</p> : null}
        </div>
    )
}

export default PogCollection;
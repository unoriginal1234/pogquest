import { useState } from 'react';

import Player from '../classes/Player';
import SlammerClass from '../classes/Slammer';

import SlammerComponent from './SlammerComponent';

function SlammersCollection(
    {player, toggleSlammersCollection}: 
    {player: Player | null, toggleSlammersCollection: () => void}) {

    // I don't  need  to update the player state 
    
    const [selectedSlammer, setSelectedSlammer] = useState<string | null>(null);
    const [equippedSlammerId, setEquippedSlammerId] = useState<string | undefined>(player?.getEquippedSlammer()?.getId());

    function handleSlammerClick(id: string) {
        setSelectedSlammer(id);
    }

    function handleEquipSlammer(id: string) {
        player?.equipSlammer(slammer!);
        setEquippedSlammerId(id);
    }

    const slammer = player?.getSlammers().find(s => s.getId() === selectedSlammer);

    return (
        <section className="demo-section">
            <h2>Slammers Collection</h2>

            <div className="button-group">
                {player?.getSlammers().map((slammer: SlammerClass, index: number) => (
                    <SlammerComponent 
                    key={index} 
                    slammer={slammer} 
                    isEquipped={equippedSlammerId === slammer.getId()}
                    onClick={() => {
                        console.log(slammer, 'slammer clicked')
                        handleSlammerClick(slammer.getId())} }
                    isSelected={selectedSlammer === slammer.getId()} />
                   
                ))}
            </div>

            {selectedSlammer && 
            <>
            <SlammerDetails slammer={slammer!} />
            {selectedSlammer && equippedSlammerId !== selectedSlammer && 
            <button onClick={() => handleEquipSlammer(selectedSlammer)}>Equip</button>}
            </>
            }


            <button onClick={toggleSlammersCollection}>Back</button>
        </section>
    );
}

function SlammerDetails({slammer}: {slammer: SlammerClass}) {

    const name = slammer?.getName();
    const description = slammer?.getDescription();

    if (!slammer) {
        return null;
    }

    return (
        <div className="slammer-details demo-section">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
    );
}

export default SlammersCollection;
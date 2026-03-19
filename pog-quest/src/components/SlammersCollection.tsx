import { useState } from 'react';

import Player from '../classes/Player';
import SlammerClass from '../classes/Slammer';

import SlammerComponent from './SlammerComponent';

function SlammersCollection(
    {player, toggleSlammersCollection, onSlammerClick, excludeIds, hideControls}: 
    {player: Player | null, 
     toggleSlammersCollection?: () => void,
     onSlammerClick?: (slammer: SlammerClass) => void,
     excludeIds?: string[],
     hideControls?: boolean}) {

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

    const displayedSlammers = excludeIds
        ? player?.getSlammers().filter(s => !excludeIds.includes(s.getId()))
        : player?.getSlammers();

    return (
        <section className="demo-section">
            <h2>Slammers Collection</h2>

            <div className="button-group">
                {displayedSlammers?.map((slammer: SlammerClass, index: number) => (
                    <SlammerComponent 
                    key={slammer.getId()} 
                    slammer={slammer} 
                    isEquipped={!hideControls ? equippedSlammerId === slammer.getId() : false}
                    onClick={() => {
                        if (onSlammerClick) {
                            onSlammerClick(slammer);
                        } else {
                            console.log(slammer, 'slammer clicked')
                            handleSlammerClick(slammer.getId());
                        }
                    }}
                    isSelected={!onSlammerClick ? selectedSlammer === slammer.getId() : false} />
                   
                ))}
            </div>

            {!hideControls && selectedSlammer && 
            <>
            <SlammerDetails slammer={slammer!} />
            {selectedSlammer && equippedSlammerId !== selectedSlammer && 
            <button onClick={() => handleEquipSlammer(selectedSlammer)}>Equip</button>}
            </>
            }

            {!hideControls && toggleSlammersCollection &&
            <button onClick={toggleSlammersCollection}>Back</button>}
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
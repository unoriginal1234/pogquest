import { useState } from 'react';

import Player from '../classes/Player';
import SlammerClass from '../classes/Slammer';

import SlammerComponent from './SlammerComponent';

function SlammersCollection(
    {player, toggleSlammersCollection}: 
    {player: Player | null, toggleSlammersCollection: () => void}) {
    
    const [selectedSlammer, setSelectedSlammer] = useState<string | null>(null);

    function handleSlammerClick(id: string) {
        setSelectedSlammer(id);
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
                      onClick={() => 
                        handleSlammerClick(slammer.getId())} 
                        isSelected={selectedSlammer === slammer.getId()} />
                ))}
            </div>

            {selectedSlammer && <SlammerDetails slammer={slammer!} />}
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
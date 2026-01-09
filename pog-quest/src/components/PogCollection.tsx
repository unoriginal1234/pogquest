import Player from '../classes/Player';
import Pog from '../classes/Pog';


function PogCollection({player, togglePogCollection }: {player: Player | null, togglePogCollection: () => void}) {

    return (
        <div>
            <h2>Pog Collection</h2>
            {player?.getPogs().map((pog: Pog) => (
                <div key={pog.name}>
                    <h3>{pog.name}</h3>
                    <p>Strength: {pog.strength}</p>
                    <p>Defense: {pog.defense}</p>
                    <p>Gold: {pog.gold}</p>
                    <p>Level: {pog.level}</p>
                </div>
            ))}
            <button onClick={togglePogCollection}>Back</button>
        </div>
    );
}

export default PogCollection;
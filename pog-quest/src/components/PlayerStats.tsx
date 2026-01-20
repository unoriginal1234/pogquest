import Player from "../classes/Player";

export default function GameMenuView({ player, togglePlayerStats }: { player: Player, togglePlayerStats: () => void }) {

    

    return (
        <section className="demo-section">
            <h2>{player.getName()}</h2> 
            <h3> {player.getArchetype().type}</h3>
            
            <p className="pog-glow-blue">Level: {player.getLevel()}</p>
            <p className="pog-glow-pink">Hitpoints: {player.getHitpoints()}</p>
            <p className="pog-glow-green">Pogs: {player.getPogCount()}</p>
            <button onClick={togglePlayerStats}>Back</button>
        </section>
    );
}

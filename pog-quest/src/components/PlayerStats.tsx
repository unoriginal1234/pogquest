import Player from "../classes/Player";

export default function GameMenuView({ player, togglePlayerStats }: { player: Player, togglePlayerStats: () => void }) {

    

    return (
        <section className="demo-section">
            <h2>{player.getName()}</h2> 
            <h3> {player.getArchetype().type}</h3>
            <div className="status-panel pog-border">
                <div className="status-item">
                    <span className="pog-glow-green">Level:</span>
                    <span className="pog-glow-pink">{player.getLevel()}</span>
                </div>
                <div className="status-item">
                    <span className="pog-glow-green">Hitpoints:</span>
                    <span className="pog-glow-pink">{player.getHitpoints()}</span>
                </div>
            </div>
            <button onClick={togglePlayerStats}>Back</button>
        </section>
    );
}

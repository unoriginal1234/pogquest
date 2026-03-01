import Player from "../classes/Player";

export default function GameMenuView({ player, togglePlayerStats }: 
    { player: Player, togglePlayerStats: () => void }) {

        // TO DO: conditionally display values or auto close this windw during VictoryScreen 

        const gold = player.getGold();
        const hitpoints = player.getCurrentHitpoints();
        const experiencePoints = player.getExperiencePoints();
        const level = player.getLevel();
        const boons = player.getBoons();
    

    return (
        <section className="demo-section">
            <h2>{player.getName()}</h2> 
            <h3> {player.getArchetype().type}</h3>
            <div className="status-panel pog-border">
                <div className="status-item">
                    <span className="pog-glow-green">Level:</span>
                    <span className="pog-glow-pink">{level}</span>
                </div>
                <div className="status-item">
                    <span className="pog-glow-green">Hitpoints:</span>
                    <span className="pog-glow-pink">{hitpoints}</span>
                </div>
                <div className="status-item">
                    <span className="pog-glow-green">Gold:</span>
                    <span className="pog-glow-pink">{gold}</span>
                </div>
                <div className="status-item">
                    <span className="pog-glow-green">Experience Points:</span>
                    <span className="pog-glow-pink">{experiencePoints}</span>
                </div>
                <div className="status-item">
                    <span className="pog-glow-green">Boons:</span>
                    <span className="pog-glow-pink">{Object.keys(boons).map((boon: string) => `${boons[boon].name}  ${boons[boon].value} -` + '⏱️'.repeat(boons[boon].duration)).join(', ')}</span>
                </div>
            </div>
            <button onClick={togglePlayerStats}>Back</button>
        </section>
    );
}

import Player from "../classes/Player";

export default function GameMenuView({ player }: { player: Player }) {
    return (
        <section className="demo-section">
            <h2>Menu View</h2>
            <p className="pog-glow-pink">
                Your Name: {player.getName()} the {player.getArchetype().type}
            </p>
            <p className="pog-glow-blue">Level: {player.getLevel()}</p>
            <p className="pog-glow-pink">Hitpoints: {player.getHitpoints()}</p>
            <p className="pog-glow-green">Pogs: {player.getPogCount()}</p>
        </section>
    );
}

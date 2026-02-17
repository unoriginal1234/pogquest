import { Link } from "react-router-dom";
import Game from "../classes/Game";

export default function EndGameScreen({ game }: { game: Game }) {
    const player = game.getPlayer();
    const story = game.getStory();

    return (
        <section className="demo-section pog-border">
            <h1 className="pog-glow-pink">Game Complete!</h1>
            
            <div className="game-summary">
                <h2>Final Stats</h2>
                
                <div className="status-panel pog-border">
                    <div className="status-item">
                        <span className="pog-glow-green">Player:</span>
                        <span className="pog-glow-pink">{player.getName()}</span>
                    </div>
                    <div className="status-item">
                        <span className="pog-glow-green">Class:</span>
                        <span className="pog-glow-blue">{player.getArchetype().type}</span>
                    </div>
                    <div className="status-item">
                        <span className="pog-glow-green">Level:</span>
                        <span className="pog-glow-pink">{player.getLevel()}</span>
                    </div>
                    <div className="status-item">
                        <span className="pog-glow-green">Health:</span>
                        <span className="pog-glow-pink">{player.getCurrentHitpoints()} / {player.getHitpoints()}</span>
                    </div>
                    <div className="status-item">
                        <span className="pog-glow-green">Gold:</span>
                        <span className="pog-glow-pink">{player.getGold()}</span>
                    </div>
                    <div className="status-item">
                        <span className="pog-glow-green">XP:</span>
                        <span className="pog-glow-pink">{player.getExperiencePoints()}</span>
                    </div>
                    <div className="status-item">
                        <span className="pog-glow-green">Pogs Collected:</span>
                        <span className="pog-glow-pink">{player.getPogCount()}</span>
                    </div>
                    <div className="status-item">
                        <span className="pog-glow-green">Slammers:</span>
                        <span className="pog-glow-pink">{player.getSlammerCount()}</span>
                    </div>
                    <div className="status-item">
                        <span className="pog-glow-green">Items:</span>
                        <span className="pog-glow-pink">{player.getInventoryCount()}</span>
                    </div>
                </div>

                <div className="status-panel pog-border" style={{ marginTop: '1rem' }}>
                    <div className="status-item">
                        <span className="pog-glow-green">Story:</span>
                        <span className="pog-glow-blue">{story.getTitle()}</span>
                    </div>
                    <div className="status-item">
                        <span className="pog-glow-green">Floors Cleared:</span>
                        <span className="pog-glow-pink">{story.getFloorCount()}</span>
                    </div>
                    <div className="status-item">
                        <span className="pog-glow-green">Game Status:</span>
                        <span className="pog-glow-pink">Victory!</span>
                    </div>
                </div>
            </div>

            <div className="button-group" style={{ marginTop: '2rem' }}>
                <Link to="/"><button>Main Menu</button></Link>
            </div>
        </section>
    );
}

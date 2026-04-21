import { Link } from "react-router-dom";

export default function Tutorial(): React.ReactNode {
    return (
        <div className="tutorial-container">
            <h1>Tutorial</h1>
            <p className="subtitle pog-glow-blue">How To Play Pog Quest</p>

            <section className="tutorial-section">
                <h2>The Basics</h2>
                <p>
                    Pog Quest is a roguelike deck-battler where you fight enemies using <strong className="pog-glow-pink">pogs</strong> and 
                    a <strong className="pog-glow-blue">slammer</strong>. Pick a character archetype, each with unique starting pogs, HP, and a slammer.
                    Progress through multi-floor stories filled with fights, shops, and adventures.
                </p>
                <div className="tutorial-archetype-row">
                    <div className="tutorial-card">
                        <h3>Bully</h3>
                        <p>19 HP &mdash; Tough and aggressive</p>
                    </div>
                    <div className="tutorial-card">
                        <h3>Skater</h3>
                        <p>17 HP &mdash; Radical tricks</p>
                    </div>
                    <div className="tutorial-card">
                        <h3>Fireworker</h3>
                        <p>15 HP &mdash; Explosive power</p>
                    </div>
                </div>
            </section>

            <div className="tutorial-divider" />

            <section className="tutorial-section">
                <h2>Combat</h2>
                <p>Each fight mixes your pogs and the enemy's pogs into one shared <strong className="pog-glow-blue">stack</strong>. Take turns slamming, playing, and defending.</p>
                <ol className="tutorial-steps">
                    <li>
                        <strong className="pog-glow-pink">Slam</strong> &mdash; 
                        Hit the stack with your slammer to flip the top pogs face-up into the play area. 
                        The number flipped depends on your slammer.
                    </li>
                    <li>
                        <strong className="pog-glow-pink">Play Your Pogs</strong> &mdash; 
                        Click your face-up pogs to activate them. Combat pogs deal damage and add defense. Action pogs trigger special effects.
                    </li>
                    <li>
                        <strong className="pog-glow-pink">Flip</strong> <span className="tutorial-optional">(optional)</span> &mdash; 
                        Instead of playing a pog, send it to the bottom of the stack to save it for later.
                    </li>
                    <li>
                        <strong className="pog-glow-pink">End Turn</strong> &mdash; 
                        Remaining enemy pogs on the table attack you. Enemy combat pogs stack defense and deal damage. Enemy pizza pogs heal the enemy.
                    </li>
                    <li>
                        <strong className="pog-glow-pink">Re-stack</strong> &mdash; 
                        When the stack runs out, all pogs reshuffle and the cycle continues.
                    </li>
                </ol>
                <div className="tutorial-outcome-row">
                    <div className="tutorial-card tutorial-card--victory">
                        <h3>Victory</h3>
                        <p>Enemy HP hits 0</p>
                    </div>
                    <div className="tutorial-card tutorial-card--defeat">
                        <h3>Defeat</h3>
                        <p>Your HP hits 0</p>
                    </div>
                </div>
            </section>

            <div className="tutorial-divider" />

            <section className="tutorial-section">
                <h2>Pogs</h2>
                <div className="tutorial-pog-types">
                    <div className="tutorial-pog-type">
                        <h3>Combat Pogs</h3>
                        <div className="tutorial-pog-example">
                            <div className="pog-component">
                                <div className="pog-stat pog-attack">3</div>
                                <div className="pog-name">Punch</div>
                                <div className="pog-stat pog-defense">1</div>
                            </div>
                        </div>
                        <p>
                            Have two stats: <span className="tutorial-stat-attack">Strength</span> (top, attack damage) 
                            and <span className="tutorial-stat-defense">Defense</span> (bottom, damage absorbed). 
                            Playing one adds its defense to yours, then deals its strength as damage to the enemy.
                        </p>
                    </div>
                    <div className="tutorial-pog-type">
                        <h3>Action Pogs</h3>
                        <div className="tutorial-pog-example">
                            <div className="pog-component action-pog">
                                <div className="pog-name">Pizza</div>
                                <div className="pog-action">🍕5</div>
                            </div>
                        </div>
                        <p>Trigger special effects instead of dealing direct damage:</p>
                        <ul>
                            <li>🍕 <strong>Pizza</strong> &mdash; Heal 5 or 10 HP</li>
                            <li>🛡️ <strong>Double Defense</strong> &mdash; Doubles your current defense</li>
                            <li>💥 <strong>Double Attack</strong> &mdash; Amplifies your damage</li>
                        </ul>
                    </div>
                </div>
            </section>

            <div className="tutorial-divider" />

            <section className="tutorial-section">
                <h2>Pog Abilities</h2>
                <div className="tutorial-abilities-row">
                    <div className="tutorial-card">
                        <h3>🤘 Radical</h3>
                        <p>Bypasses enemy defense entirely &mdash; damage goes straight to HP.</p>
                    </div>
                    <div className="tutorial-card">
                        <h3>🍀 Lucky</h3>
                        <p>If this pog is in the stack after a slam, it forces itself into the flipped set. You always get to see it.</p>
                    </div>
                </div>
            </section>

            <div className="tutorial-divider" />

            <section className="tutorial-section">
                <h2>Slammers</h2>
                <p>
                    Your slammer determines <strong className="pog-glow-blue">how many pogs you flip</strong> per slam. 
                    Equip different slammers from your collection between fights.
                </p>
                <div className="tutorial-slammer-example">
                    <div className="slammer-component">
                        <div className="slammer-flip-count">3</div>
                        <div className="slammer-art slammer-art-flipper" />
                        <h3>Slammer</h3>
                    </div>
                </div>
                <p>Some slammers also grant <strong className="pog-glow-pink">boons</strong> (temporary buffs) when you slam:</p>
                <div className="tutorial-boons-row">
                    <div className="tutorial-card">
                        <h3>Beefer</h3>
                        <div className="tutorial-boon-icon">
                            <div className="slammer-art slammer-art-beefer" />
                        </div>
                        <p>Adds bonus attack damage to your combat pogs.</p>
                    </div>
                    <div className="tutorial-card">
                        <h3>Turtler</h3>
                        <div className="tutorial-boon-icon">
                            <div className="slammer-art slammer-art-turtler" />
                        </div>
                        <p>When you play a combat pog, its strength is also added as extra defense.</p>
                    </div>
                </div>
            </section>

            <div className="tutorial-divider" />

            <section className="tutorial-section">
                <h2>Adventures</h2>
                <p>Non-combat encounters between fights. Choose wisely.</p>
                <div className="tutorial-adventures-grid">
                    <div className="tutorial-card">
                        <h3>🔥 Campfire</h3>
                        <p>Rest and recover 10 HP.</p>
                    </div>
                    <div className="tutorial-card">
                        <h3>🏃 Chase</h3>
                        <p>A risky escape &mdash; costs 5 HP.</p>
                    </div>
                    <div className="tutorial-card">
                        <h3>📦 Chest</h3>
                        <p>Find a new pog (3 str / 1 def).</p>
                    </div>
                    <div className="tutorial-card">
                        <h3>🔄 Trade</h3>
                        <p>Swap one of your pogs for a random new one.</p>
                    </div>
                    <div className="tutorial-card">
                        <h3>🔨 Forge</h3>
                        <p>Merge two slammers into one stronger slammer.</p>
                    </div>
                    <div className="tutorial-card">
                        <h3>🍀 Lucky</h3>
                        <p>Grant the lucky ability to one of your pogs.</p>
                    </div>
                </div>
            </section>

            <div className="tutorial-divider" />

            <section className="tutorial-section">
                <h2>Shops</h2>
                <p>
                    Spend <span className="tutorial-gold">gold</span> earned from defeating enemies to buy new pogs, slammers, and items. 
                    Build your collection and strengthen your loadout for tougher fights ahead.
                </p>
            </section>

            <div className="tutorial-divider" />

            <section className="tutorial-section">
                <h2>Leveling Up</h2>
                <p>Defeating enemies awards <strong className="pog-glow-green">XP</strong>. 
                Hit XP thresholds to level up (1 through 10). On each level-up, pick a new pog from options specific to your archetype.</p>
            </section>

            <div className="tutorial-divider" />

            <section className="tutorial-section">
                <h2>Game Flow</h2>
                <ol className="tutorial-steps">
                    <li>Choose your archetype and start the story.</li>
                    <li>Each <strong className="pog-glow-blue">Floor</strong> has multiple <strong className="pog-glow-pink">Chapters</strong> &mdash; fights, shops, and adventures.</li>
                    <li>Complete chapters to unlock more of the floor.</li>
                    <li>Each floor ends with a <strong className="pog-glow-pink">Boss Fight</strong>.</li>
                    <li>Beat the boss to advance to the next floor.</li>
                    <li>Clear all floors to complete the game.</li>
                </ol>
            </section>

            <div className="tutorial-footer">
                <Link to="/"><button>Main Menu</button></Link>
            </div>
        </div>
    );
}

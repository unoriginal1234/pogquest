import PlayerClass from "../classes/Player";
import type { Boon } from "../classes/types";
import StatBar from "./StatBar";
import BoonNerfBox from "./BoonNerfBox";

interface PlayerComponentProps {
    player: PlayerClass;
    currentPlayerDefense: number;
    currentPlayerHitpoints: number;
    playerBoons: { [key: string]: Boon };
}

export default function PlayerComponent({ player, currentPlayerDefense, currentPlayerHitpoints, playerBoons }: PlayerComponentProps) {
    return (
        <div className="combatant-panel-row">
            <div className="combatant-panel">
                <div className="combatant-identity">
                    <span className="combatant-name">{player.getName()}</span>
                    <span className="combatant-detail">Pogs: {player.getPogs().length}</span>
                </div>
                <div className="combatant-bars">
                    <StatBar current={currentPlayerDefense} max={player.getHitpoints()} label="DEF" variant="defense" />
                    <StatBar current={currentPlayerHitpoints} max={player.getHitpoints()} label="HP" variant="hp" />
                </div>
            </div>
            <BoonNerfBox boons={playerBoons} nerfs={{}} />
        </div>
    );
}
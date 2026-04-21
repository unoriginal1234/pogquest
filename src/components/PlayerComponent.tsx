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
                <h2>{player.getName()}</h2>
                <p>Pogs: {player.getPogs().length}</p>
                <StatBar current={currentPlayerDefense} max={currentPlayerDefense} label="DEF" variant="defense" />
                <StatBar current={currentPlayerHitpoints} max={player.getHitpoints()} label="HP" variant="hp" />
            </div>
            <BoonNerfBox boons={playerBoons} nerfs={{}} />
        </div>
    );
}
import PlayerClass from "../classes/Player";
import type { Boon } from "../classes/types";
import StatBar from "./StatBar";

interface PlayerComponentProps {
    player: PlayerClass;
    currentPlayerDefense: number;
    currentPlayerHitpoints: number;
    playerBoons: { [key: string]: Boon };
}

export default function PlayerComponent({ player, currentPlayerDefense, currentPlayerHitpoints, playerBoons }: PlayerComponentProps) {
    
        return (
        <div className="combatant-panel">
            <p>
                {Object.keys(playerBoons).map((boon: string) => 
                    playerBoons[boon].duration > 0 ? `${playerBoons[boon].name}  ${playerBoons[boon].value} -` + '⏱️'.repeat(playerBoons[boon].duration) : '' )}</p>
            <h2>{player.getName()}</h2>
            <p>Pogs: {player.getPogs().length}</p>
            <StatBar current={currentPlayerDefense} max={currentPlayerDefense} label="DEF" variant="defense" />
            <StatBar current={currentPlayerHitpoints} max={player.getHitpoints()} label="HP" variant="hp" />
        </div>
    );
}
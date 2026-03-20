import PlayerClass from "../classes/Player";
import type { Boon } from "../classes/types";

interface PlayerComponentProps {
    player: PlayerClass;
    currentPlayerDefense: number;
    currentPlayerHitpoints: number;
    playerBoons: { [key: string]: Boon };
}

export default function PlayerComponent({ player, currentPlayerDefense, currentPlayerHitpoints, playerBoons }: PlayerComponentProps) {
    
        return (
        <div>
            <p>
                {Object.keys(playerBoons).map((boon: string) => 
                    playerBoons[boon].duration > 0 ? `${playerBoons[boon].name}  ${playerBoons[boon].value} -` + '⏱️'.repeat(playerBoons[boon].duration) : '' )}</p>
            <h2>{player.getName()}</h2>
            <p>Pogs: {player.getPogs().length}</p>
            <p>Defense: {currentPlayerDefense}</p>
            <p>Hitpoints: {currentPlayerHitpoints}</p>

        </div>
    );
}
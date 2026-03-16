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
                {Object.keys(playerBoons).map((boon: string) => `${playerBoons[boon].name}  ${playerBoons[boon].value} -` + '⏱️'.repeat(playerBoons[boon].duration)).join(', ')}</p>
            <h2>{player.getName()}</h2>
            <p>Defense: {currentPlayerDefense}</p>
            <p>Hitpoints: {currentPlayerHitpoints}</p>
            
            {/* <p>Gold: {player.getGold()}</p> */}
            <p>Pogs: {player.getPogs().length}</p>
        </div>
    );
}
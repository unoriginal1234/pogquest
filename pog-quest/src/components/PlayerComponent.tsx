import PlayerClass from "../classes/Player";

export default function PlayerComponent({ player, currentPlayerDefense, currentPlayerHitpoints }: 
    
    { player: PlayerClass, currentPlayerDefense: number, currentPlayerHitpoints: number }) {
    
    
        return (
        <div>
            <h2>{player.getName()}</h2>
            <p>Defense: {currentPlayerDefense}</p>
            <p>Hitpoints: {currentPlayerHitpoints}</p>
            <p>Level: {player.getLevel()}</p>
            {/* <p>Gold: {player.getGold()}</p> */}
            <p>Pogs: {player.getPogs().length}</p>
        </div>
    );
}
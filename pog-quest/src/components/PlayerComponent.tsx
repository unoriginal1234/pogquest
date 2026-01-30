import PlayerClass from "../classes/Player";

export default function PlayerComponent({ player, currentPlayerDefense }: { player: PlayerClass, currentPlayerDefense: number }) {
    return (
        <div>
            <h2>{player.getName()}</h2>
            <p>Defense: {currentPlayerDefense}</p>
            <p>Level: {player.getLevel()}</p>
            {/* <p>Gold: {player.getGold()}</p> */}
            <p>Pogs: {player.getPogs().length}</p>
        </div>
    );
}
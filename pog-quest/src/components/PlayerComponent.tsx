import PlayerClass from "../classes/Player";

export default function PlayerComponent({ player }: { player: PlayerClass }) {
    return (
        <div>
            <h2>{player.getName()}</h2>
            <p>Level: {player.getLevel()}</p>
            {/* <p>Gold: {player.getGold()}</p> */}
            <p>Pogs: {player.getPogs().length}</p>
        </div>
    );
}
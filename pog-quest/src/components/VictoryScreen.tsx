import PlayerClass from "../classes/Player";

export default function VictoryScreen({ player, baddieGold, playerGold }: { player: PlayerClass, baddieGold: number, playerGold: number }) {
    // TO DO: handle level up with experience points
    // TODO: add experience points per Baddie to baddie class
    // TO DO : increase HP when level up
    // TO DO: Offer a choice of pawns / slammers when level up

    const newGold = playerGold + baddieGold;
    player.setGold(newGold);

    return (
        <div>
            <h1>Victory</h1>
            <p>Level Up!</p>
            <p>You have {player.getExperiencePoints()} experience points</p>
            <p>You had {playerGold} gold</p>
            <p>You gained {baddieGold} gold</p>
            <p>Now you have {newGold} gold</p>
            {/* <p>You have reached level {player.getLevel()}</p>
            <p>You have {player.getGold()} gold</p>
            <p>You have {player.getPogs().length} pogs</p>
            <p>You have {player.getSlammers().length} slammers</p>
            <p>You have {player.getInventory().length} items</p>
            <p>You have {player.getHitpoints()} hitpoints</p>
            <p>You have {player.getDefense()} defense</p>
            <p>You have {player.getStrength()} strength</p> */}
        </div>
    );
}
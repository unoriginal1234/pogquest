export default function VictoryScreen({ baddieGold, awardXP }: { baddieGold: number, awardXP: number }) {
    // TO DO: handle level up with experience points
    // TODO: add experience points per Baddie to baddie class
    // TO DO : increase HP when level up
    // TO DO: Offer a choice of pawns / slammers when level up

    // there's a bug here where gold is duplicating when I open the item menu
    

    return (
        <div>
            <h1>Victory</h1>
            <p>Level Up!</p>
            <p>You gained {baddieGold} gold</p>
            <p>You gained {awardXP} XP</p>
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
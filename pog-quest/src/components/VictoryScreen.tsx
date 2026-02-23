import { useState, useEffect } from "react";
import PlayerClass from "../classes/Player";

export default function VictoryScreen(

    { baddieGold, 
        awardXP, 
        playerXPBeforeVictory, 
        playerLevelBeforeVictory, 
        player }: 
    { baddieGold: number, 
        awardXP: number, 
        playerXPBeforeVictory: number, 
        playerLevelBeforeVictory: number, 
        player: PlayerClass }) {
    
    
    const [playerLevel, setPlayerLevel] = useState(player.getLevel());

    // TO DO : increase HP when level up
    // TO DO: Offer a choice of pawns / slammers when level up
    
    useEffect(() => {
        player.setLevel();
        setPlayerLevel(player.getLevel());
    }, [player]);

    return (
        <div>
            <h1>Victory</h1>
            
            <p>You had {playerXPBeforeVictory} XP before victory</p>
            <p>You gained {awardXP} XP</p>

            <p>You were level {playerLevelBeforeVictory} before victory</p>
            <p>You are now level {playerLevel}</p>
            {playerLevel > playerLevelBeforeVictory && <p>Level Up!</p>}

            <p>You gained {baddieGold} gold</p>
            

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
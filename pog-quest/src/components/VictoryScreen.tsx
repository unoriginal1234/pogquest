import { useState, useEffect } from "react";
import PlayerClass from "../classes/Player";
import LevelUpScreen from "./LevelUpScreen";


interface VictoryScreenProps {
    baddieGold: number;
    awardXP: number;
    playerXPBeforeVictory: number;
    playerLevelBeforeVictory: number;
    player: PlayerClass;
}

export default function VictoryScreen({ baddieGold, awardXP, playerXPBeforeVictory, playerLevelBeforeVictory, player }: VictoryScreenProps) {
    
    // TODO: Only let the player proceed if they have collected all the level up perks to match their level
    
    const [playerLevel, setPlayerLevel] = useState(player.getLevel());
    const [levelUp, setLevelUp] = useState(false);

    const levelUpOptions = player.getArchetype().getLevelUpOptions();

    // TO DO : increase HP when level up
    // TO DO: Offer a choice of pawns / slammers when level up
    // TO DO: Add a level up screen

    // TODO: What if level up happens twice in a row?
    // I just have to add a basic for loop for each new level

    // also need to set new hitpoints when level up
    // for now thinking about 1.2 x hitpoints
    // also need to set new current hitpoints

    // TODO: If I handle this only in react then there is a risk of bugs

    useEffect(() => {
        player.setLevel();
        setPlayerLevel(player.getLevel());
    }, [player]);

    return (
        <div>
            <h1>Victory</h1>
            <p>You gained {baddieGold} gold</p>
            <p>You HP is now {player.getCurrentHitpoints()}</p>
            
            <p>You had {playerXPBeforeVictory} XP before victory</p>
            <p>You gained {awardXP} XP</p>

            <p>You were level {playerLevelBeforeVictory} before victory</p>
            <p>You are now level {playerLevel}</p>

            {playerLevel > playerLevelBeforeVictory && 
            <button onClick={() => setLevelUp(true)}>Level Up</button>
            }
            {levelUp && 
                <LevelUpScreen 
                levelUpOptions={levelUpOptions} 
                newLevel={playerLevel} 
                setLevelUp={setLevelUp}/>}
        </div>
    );
}
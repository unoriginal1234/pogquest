import { useState, useEffect } from "react";
import PlayerClass from "../classes/Player";
import LevelUpScreen from "./LevelUpScreen";


interface VictoryScreenProps {
    baddieGold: number;
    awardXP: number;
    playerXPBeforeVictory: number;
    player: PlayerClass;
}

export default function VictoryScreen({ 
    baddieGold, 
    awardXP, 
    playerXPBeforeVictory,  
    player }: VictoryScreenProps) {
    
    // TODO: Only let the player proceed if they have collected all the level up perks to match their level
    
    const [playerLevel, setPlayerLevel] = useState(player.getLevel());
    const [levelUp, setLevelUp] = useState(false);
    const [playerNeedsToLevelUp, setPlayerNeedsToLevelUp] = useState(player.hasLeveledUp());

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
        setPlayerNeedsToLevelUp(player.hasLeveledUp());
        setPlayerLevel(player.getLevel());
    }, [player]);

    return (
        <div>
            <h1>Victory</h1>
            <p>You gained {baddieGold} gold</p>
            <p>You HP is now {player.getCurrentHitpoints()}</p>
            
            <p>You had {playerXPBeforeVictory} XP before victory</p>
            <p>You gained {awardXP} XP</p>

            

            {!playerNeedsToLevelUp && 
                <button onClick={() => 
                    {
                        setLevelUp(true);
                        player.levelUp();
                    }
                }
                >Level Up to {playerLevel + 1}</button>
            
            }
            {levelUp && 
                <LevelUpScreen 
                    levelUpOptions={levelUpOptions} 
                    newLevel={playerLevel + 1} 
                    setLevelUp={setLevelUp}
                    player={player}
                    setPlayerNeedsToLevelUp={setPlayerNeedsToLevelUp}
                />}
        </div>
    );
}
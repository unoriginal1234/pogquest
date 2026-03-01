import { useState, useEffect, useContext } from "react";

import { UserContext } from "../context/UserContext";
import User from "../classes/User";

import MatchClass from "../classes/Match";
import SlammerClass from "../classes/Slammer";
import PogClass from "../classes/Pog";

import BaddieComponent from "./BaddieComponent";
import PlayerComponent from "./PlayerComponent";
import StackComponent from "./StackComponent";
import InPlayPogsComponent from "./InPlayPogsComponent";

import type { Damageable } from "./matchTypes";
import VictoryScreen from "./VictoryScreen";
import StackToolTip from "./tooltips/stackToolTip";

export default function MatchComponent({ match, setIsGameOver }: { match: MatchClass, setIsGameOver: (isGameOver: boolean) => void }) {
    
    const player = match.getPlayer();
    const baddie = match.getBaddie();
    const pogOwners = match.getPogOwners();

    const awardGold = baddie.getGold() + player.getGold();
    const awardXP = baddie.getXPbyLevel() || 0;

    const [openMenuPogId, setOpenMenuPogId] = useState<string | null>(null);    
    const [ inPlayPogs, setInPlayPogs ] = useState<PogClass[]>(() => match.getInPlayPogs().slice());
    const [ visualStack, setVisualStack ] = useState<PogClass[]>(() => match.getStack().slice());   
    const [currentBaddieHitpoints, setCurrentBaddieHitpoints] = useState(baddie.getCurrentHitpoints());
    const [currentBaddieDefense, setCurrentBaddieDefense] = useState(baddie.getDefense());
    const [currentPlayerDefense, setCurrentPlayerDefense] = useState(player.getDefense());
    const [currentPlayerHitpoints, setCurrentPlayerHitpoints] = useState(player.getCurrentHitpoints());
    const [flippedPogIds, setFlippedPogIds] = useState<string[]>([]);

    const [canReStack, setCanReStack] = useState(false);

    const [playerSlammer, setPlayerSlammer] = useState<SlammerClass | null>(player.getEquippedSlammer() || null);

    const isVictoryScreenOpen = baddie.getCurrentHitpoints() <= 0;
    const isGameOver = player.getCurrentHitpoints() <= 0;


    const user = useContext<User | null>(UserContext);
    const isAdmin = user?.getRole() === "admin";
    //TO DO: I need to add a tooltip to the stack component
    //TO DO: I need to disable the stack component if there are still pogs in play
    //TO DO: I need to disable the stack component if there are no pogs in the stack

    // const playerLevelBeforeVictory = player.getLevel();
    // const playerXPBeforeVictory = player.getExperiencePoints();
    const playerXPBeforeVictory = match.getPlayerXPBeforeVictory();
    
    // TODO: end turn should handle the flipped pog going back to the stack logic
    // TODO: Think about when to reset player and baddie defense

    useEffect(() => {
        if (isGameOver) {
            setIsGameOver(true);
        }
    }, [isGameOver, setIsGameOver]);

    useEffect(() => {
        if (isVictoryScreenOpen && match.getStatus() !== 'completed') {
            // this logic should only run once
            
            // I could put these on the match class instead of this hook
            player.setDefense(0);
            player.setGold(awardGold);
            // TODO: this method returns a value, I can use it in the victory screen
            player.addExperiencePoints(awardXP);
            match.endMatch();
        }
    }, [isVictoryScreenOpen, match, awardGold, player, awardXP]);

    useEffect(() => {
        // This could be dangerous. It works now because the player.getEquippedSlammer() is not changing in the same render cycle.
        setPlayerSlammer(player.getEquippedSlammer()!);
    }, [player.getEquippedSlammer()]);
    

    function handleStackClick() {
        player.setDefense(0);
        setCurrentPlayerDefense(0);
        
        
        if (!playerSlammer) {
            console.log("No slammer equipped");
            return;
        }
        const { flippedStack, remainingStack, boons } = playerSlammer.slam(visualStack);
        player.setBoons(boons || {});
        // TODO: I need to add a visual indicator 
        setInPlayPogs(flippedStack);
        setVisualStack(remainingStack);
        match.setInPlayPogs(flippedStack);
        match.setStack(remainingStack);
        if (match.getStackCount() <= 0) {
            setCanReStack(true);
        }
        // I need to add the flipped pogs to the bottom of the stack

    }

    function handleReStackClick() {
        setCanReStack(false);
        // need to double check if I like this logic for resetting defense
        baddie.setDefense(0);
        setCurrentBaddieDefense(0);
        player.setDefense(0);
        setCurrentPlayerDefense(0);

        match.setNewStack();
        match.setInPlayPogs([]);
        
        setVisualStack(match.getStack().slice());
        setInPlayPogs([]);
        setFlippedPogIds([]);
    }

    function handleInPlayPogClick(pog: PogClass) {
        if (pogOwners.get(pog.getId()) === player.getId()) {
            setOpenMenuPogId(pog.getId());
        } else {
            setOpenMenuPogId(null);
        }
    }

    function applyDamageToTarget(
        target: Damageable,
        pogStrength: number,
        setDefense: (d: number) => void,
        setHitpoints: (hp: number) => void
    ) {
        let remainingStrength = pogStrength;
        if (target.getDefense() > 0) {
            let newDefense = target.getDefense() - remainingStrength;
            if (newDefense < 0) {
                remainingStrength = -newDefense;
                newDefense = 0;
            } else {
                remainingStrength = 0;
            }
            target.setDefense(newDefense);
            setDefense(newDefense);
        }
        target.setCurrentHitpoints(target.getCurrentHitpoints() - remainingStrength);
        setHitpoints(target.getCurrentHitpoints());
    }

    function handleUseClick(pog: PogClass) {
        const pogStrength = pog.getStrength();
        const pogDefense = pog.getDefense();

        match.addToPlayedPogs(pog);
        const newInPlayPogs = match.getInPlayPogs().filter(pogs => pogs.getId() !== pog.getId());
        match.setInPlayPogs(newInPlayPogs);
        setInPlayPogs(match.getInPlayPogs().slice());

        player.setDefense(player.getDefense() + pogDefense);
        setCurrentPlayerDefense(player.getDefense());

        applyDamageToTarget(baddie, pogStrength, setCurrentBaddieDefense, setCurrentBaddieHitpoints);
        setOpenMenuPogId(null);
    }

    function handleFlipClick(pog: PogClass) {
        console.log("flip up", pog);
        setOpenMenuPogId(null);
        setFlippedPogIds([...flippedPogIds, pog.getId()]);
    }

    function endCurrentTurn() {
        // loop through inPlayPogs and apply their effects to the player
        
        baddie.setDefense(0);
        setCurrentBaddieDefense(0);
        for (const pog of inPlayPogs) {
            if (pogOwners.get(pog.getId()) === baddie.getId()) {
            const pogStrength = (pog.getStrength());
            const pogDefense = (pog.getDefense());
            baddie.setDefense(baddie.getDefense() + pogDefense);

            applyDamageToTarget(player, pogStrength, setCurrentPlayerDefense, setCurrentPlayerHitpoints);
            match.addToPlayedPogs(pog);
            const newInPlayPogs = match.getInPlayPogs().filter(pogs => pogs.getId() !== pog.getId());
            match.setInPlayPogs(newInPlayPogs);
            setInPlayPogs(newInPlayPogs);
            } else {
                if (!flippedPogIds.includes(pog.getId())) {
                match.addToPlayedPogs(pog);
                const newInPlayPogs = match.getInPlayPogs().filter(pogs => pogs.getId() !== pog.getId());
                match.setInPlayPogs(newInPlayPogs);
                setInPlayPogs(newInPlayPogs);
                }
            }
        }
        for (const pogId of flippedPogIds) {
            const pog = inPlayPogs.find(pog => pog.getId() === pogId);
            if (pog) {
                // TO DO: there is some duplicate logic that could be abstracted out
                match.addToBottomOfStack(pog);
                setVisualStack(match.getStack().slice());
                const newInPlayPogs = match.getInPlayPogs().filter(pogs => pogs.getId() !== pog.getId());
                match.setInPlayPogs(newInPlayPogs);
                setInPlayPogs(newInPlayPogs);
            }
        }
        setFlippedPogIds([]);
        // clear the inPlayPogs array
        setCurrentPlayerHitpoints(player.getCurrentHitpoints());
        setCurrentBaddieDefense(baddie.getDefense());
    }

    if (isVictoryScreenOpen) {
        return (
            <VictoryScreen 
                baddieGold={baddie.getGold()} 
                awardXP={awardXP} 
                playerXPBeforeVictory={playerXPBeforeVictory}
                player={player}/>
        );
    }

    return (
            <div className="match-layout">
            <BaddieComponent baddie={baddie} currentBaddieHitpoints={currentBaddieHitpoints} currentBaddieDefense={currentBaddieDefense} />
            <div className="match-arena">
                {StackComponent && <StackToolTip length={visualStack.length}><StackComponent stack={visualStack} onClick={handleStackClick} /></StackToolTip>}
                <InPlayPogsComponent 
                    inPlayPogs={inPlayPogs}
                    openMenuPogId={openMenuPogId}
                    pogOwners={pogOwners}
                    playerId={player.getId()}
                    handleInPlayPogClick={handleInPlayPogClick}
                    handleUseClick={handleUseClick}
                    handleFlipClick={handleFlipClick}
                    flippedPogIds={flippedPogIds}
                />
                <div className="flex flex-col gap-2">
                    {isAdmin ? 
                    <button onClick={handleReStackClick} >
                        DEV: Re-stack
                    </button> : 
                    <button onClick={handleReStackClick} disabled={!canReStack}>
                        Re-stack
                    </button>}
                    {/* TO DO: disable the button if there are still pogs belonging to the player in the inPlayPogs array */}
                    <button onClick={endCurrentTurn}>
                        End Turn
                    </button>
                </div>
            </div>
            <PlayerComponent player={player} currentPlayerDefense={currentPlayerDefense} currentPlayerHitpoints={currentPlayerHitpoints} />
            </div>
    );
}
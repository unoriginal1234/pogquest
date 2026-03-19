import { useState, useEffect, useContext } from "react";

import { UserContext } from "../context/UserContext";
import User from "../classes/User";

import MatchClass from "../classes/Match";
import PogClass from "../classes/Pog";
import type { Boon } from "../classes/types";


import BaddieComponent from "./BaddieComponent";
import PlayerComponent from "./PlayerComponent";
import StackComponent from "./StackComponent";
import InPlayPogsComponent from "./InPlayPogsComponent";

import type { Damageable } from "./matchTypes";
import VictoryScreen from "./VictoryScreen";
import StackToolTip from "./tooltips/stackToolTip";

export default function MatchComponent({ 
    match, 
    setIsGameOver, 
    handleCanCloseChapter,
    onLevelUpComplete }: 
    { match: MatchClass, 
        setIsGameOver: (isGameOver: boolean) => void, 
        handleCanCloseChapter: (canClose: boolean) => void,
        onLevelUpComplete: () => void }) {
    
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
    const [canReStack, setCanReStack] = useState(() => match.getCanReStack());
    const [canEndTurn, setCanEndTurn] = useState(() => match.getCanEndTurn());
    const [playerBoons, setPlayerBoons] = useState<{ [key: string]: Boon }>(player.getBoons());

    const isVictoryScreenOpen = baddie.getCurrentHitpoints() <= 0;
    const isGameOver = player.getCurrentHitpoints() <= 0;


    const user = useContext<User | null>(UserContext);
    const isAdmin = user?.getRole() === "admin";

    const playerXPBeforeVictory = match.getPlayerXPBeforeVictory();

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
            player.addExperiencePoints(awardXP);
            player.setBoons({});
            match.endMatch();
        }
    }, [isVictoryScreenOpen, match, awardGold, player, awardXP]);

    

    function handleStackClick() {
        match.setCanEndTurn(true);
        setCanEndTurn(true);
        if (!match.getCanSlam()) {
            console.log("Cannot slam");
            return;
        }
        match.setCanSlam(false);
        player.setDefense(0);
        setCurrentPlayerDefense(0);
        const playerSlammer = player.getEquippedSlammer();
        if (!playerSlammer) {
            console.log("No slammer equipped");
            return;
        }
        const { flippedStack, remainingStack, boons } = playerSlammer.slam(visualStack);
        // TO DO: FIgure out how to handle overwritting boons
        // right now this is overwriting the boons, I need to add them if they're new
        if (boons) {
            for (const boon in boons) {
                if (!player.getBoons()[boon]) {
                    player.addBoon(boon, boons[boon]);
                } else {
                    player.removeBoon(boon);
                    player.addBoon(boon, boons[boon]);
                }
            }
            console.log("player.getBoons()", player.getBoons());
        }
        
        
        setPlayerBoons({...player.getBoons()});
        // TODO: I need to add a visual indicator 
        setInPlayPogs(flippedStack);
        setVisualStack(remainingStack);
        match.setInPlayPogs(flippedStack);
        match.setStack(remainingStack);
        
        // I need to add the flipped pogs to the bottom of the stack

    }

    function handleReStackClick() {
        setCanReStack(false);
        match.setCanReStack(false);
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

        match.setCanEndTurn(false);
        setCanEndTurn(false);
        match.setCanSlam(true);
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
        setHitpoints: (hp: number) => void,
        boons: { [key: string]: Boon } = {},
    ) {
        let remainingStrength = pogStrength;
        if (boons['beefer']) {
            remainingStrength += boons['beefer'].value;
        }
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
        const boons = player.getBoons();
        if (boons['turtler']) {
            player.setDefense(player.getDefense() + boons['turtler'].value);
            setCurrentPlayerDefense(player.getDefense());
        }
        match.addToPlayedPogs(pog);
        const newInPlayPogs = match.getInPlayPogs().filter(pogs => pogs.getId() !== pog.getId());
        match.setInPlayPogs(newInPlayPogs);
        setInPlayPogs(match.getInPlayPogs().slice());

        player.setDefense(player.getDefense() + pogDefense);
        setCurrentPlayerDefense(player.getDefense());
        applyDamageToTarget(baddie, pogStrength, setCurrentBaddieDefense, setCurrentBaddieHitpoints, player.getBoons());
        setOpenMenuPogId(null);
    }

    function handleFlipClick(pog: PogClass) {
        console.log("flip up", pog);
        setOpenMenuPogId(null);
        setFlippedPogIds([...flippedPogIds, pog.getId()]);
    }

    function endCurrentTurn() {
        // loop through inPlayPogs and apply their effects to the player
        console.log("ending current turn");
        match.setCanEndTurn(false);
        setCanEndTurn(false);
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
        for (const boonName in player.getBoons()) {
            const boon = player.getBoons()[boonName];
            boon.duration--;
            if (boon.duration <= 0) {
                player.removeBoon(boonName);
                console.log("player.getBoons()", player.getBoons());
            }
            player.setBoons({...player.getBoons(), [boonName]: boon});
            setPlayerBoons(player.getBoons());
        }
        if (match.getStackCount() <= 0) {
            setCanReStack(true);
            match.setCanReStack(true);
        }
        match.setCanSlam(true);
    }

    if (isVictoryScreenOpen) {
        return (
            <VictoryScreen 
                baddieGold={baddie.getGold()} 
                awardXP={awardXP} 
                playerXPBeforeVictory={playerXPBeforeVictory}
                player={player}
                handleCanCloseChapter={handleCanCloseChapter}
                onLevelUpComplete={onLevelUpComplete}
                />
        );
    }

    return (
            <div className="match-layout">
            <BaddieComponent baddie={baddie} currentBaddieHitpoints={currentBaddieHitpoints} currentBaddieDefense={currentBaddieDefense} />
            <div className="match-arena">
                <InPlayPogsComponent 
                    inPlayPogs={inPlayPogs}
                    openMenuPogId={openMenuPogId}
                    pogOwners={pogOwners}
                    playerId={player.getId()}
                    handleInPlayPogClick={handleInPlayPogClick}
                    handleUseClick={handleUseClick}
                    handleFlipClick={handleFlipClick}
                    flippedPogIds={flippedPogIds}
                    canFlip={visualStack.length > 0}
                />
                <div className="match-arena-bottom">
                    <div className="match-arena-bottom-side">
                        {isAdmin ? 
                        <button onClick={handleReStackClick} >
                            DEV: Re-stack
                        </button> : 
                        canReStack ? <button onClick={handleReStackClick}>
                            Re-stack
                        </button> : null}
                    </div>
                    {StackComponent && <StackToolTip length={visualStack.length}><StackComponent stack={visualStack} onClick={handleStackClick} /></StackToolTip>}
                    <div className="match-arena-bottom-side">
                        {isAdmin ? <button onClick={endCurrentTurn} >DEV: End Turn</button> :
                        canEndTurn ? <button onClick={endCurrentTurn} >
                            End Turn
                        </button> : null}
                    </div>
                </div>
            </div>
            <PlayerComponent 
            player={player} 
            currentPlayerDefense={currentPlayerDefense} 
            currentPlayerHitpoints={currentPlayerHitpoints} 
            playerBoons={playerBoons}
            />
            </div>
    );
}
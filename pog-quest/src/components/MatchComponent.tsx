import { useState, useEffect } from "react";

import MatchClass from "../classes/Match";
import SlammerClass from "../classes/Slammer";

import BaddieComponent from "./BaddieComponent";
import PlayerComponent from "./PlayerComponent";
import StackComponent from "./StackComponent";
import InPlayPogsComponent from "./InPlayPogsComponent";
import PogClass from "../classes/Pog";

import type { Damageable } from "./matchTypes";
import VictoryScreen from "./VictoryScreen";

export default function MatchComponent({ match }: { match: MatchClass }) {
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

    const [playerSlammer, setPlayerSlammer] = useState<SlammerClass | null>(player.getEquippedSlammer() || null);

    const isVictoryScreenOpen = baddie.getCurrentHitpoints() <= 0;

    // TODO: end turn should handle the flipped pog going back to the stack logic
    // TODO: handle empty stack logic
    // TODO: Think about when to reset player and baddie defense


    useEffect(() => {
        if (isVictoryScreenOpen && match.getStatus() !== 'completed') {
            // this logic should only run once
            match.endMatch();
            player.setDefense(0);
            player.setGold(awardGold);
            player.addExperiencePoints(awardXP);
        }
    }, [isVictoryScreenOpen, match, awardGold, player, awardXP]);

    useEffect(() => {
        // I am worried that this is triggering too often
        setPlayerSlammer(player.getEquippedSlammer()!);
    }, [player]);
    

    function handleStackClick() {
        for (const pogId of flippedPogIds) {
            const pog = inPlayPogs.find(pog => pog.getId() === pogId);
            if (pog) {
                match.addToBottomOfStack(pog);
            }
        }
        setFlippedPogIds([]);
        if (!playerSlammer) {
            console.log("No slammer equipped");
            return;
        }
        const { flippedStack, remainingStack } = playerSlammer.slam(visualStack);
        setInPlayPogs(flippedStack);
        setVisualStack(remainingStack);
        match.setInPlayPogs(flippedStack);
        match.setStack(remainingStack);
        // I need to add the flipped pogs to the bottom of the stack

    }

    function handleReStackClick() {
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
        console.log("endCurrentTurn", inPlayPogs);
        for (const pog of inPlayPogs) {
            if (pogOwners.get(pog.getId()) === baddie.getId()) {
            let pogStrength = (pog.getStrength());
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
            }}
        }
        // clear the inPlayPogs array
        setCurrentPlayerHitpoints(player.getCurrentHitpoints());
        setCurrentBaddieDefense(baddie.getDefense());
    }

    if (isVictoryScreenOpen) {
        return (
            <VictoryScreen baddieGold={baddie.getGold()} awardXP={awardXP} />
        );
    }

    return (
            <div className="match-layout">
            <BaddieComponent baddie={baddie} currentBaddieHitpoints={currentBaddieHitpoints} currentBaddieDefense={currentBaddieDefense} />
            <div className="match-arena">
                <StackComponent stack={visualStack} onClick={handleStackClick} />
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
                    <button onClick={handleReStackClick}>
                        Re-stack
                    </button>
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
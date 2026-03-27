import { useState, useEffect, useContext } from "react";

import { UserContext } from "../context/UserContext";
import User from "../classes/User";

import MatchClass from "../classes/Match";
import type { MatchSnapshot } from "../classes/Match";
import PogClass from "../classes/Pog";
import type { Boon } from "../classes/types";

import BaddieComponent from "./BaddieComponent";
import PlayerComponent from "./PlayerComponent";
import StackComponent from "./StackComponent";
import InPlayPogsComponent from "./InPlayPogsComponent";
import VictoryScreen from "./VictoryScreen";
import StackToolTip from "./tooltips/stackToolTip";

interface MatchComponentProps {
    match: MatchClass;
    setIsGameOver: (isGameOver: boolean) => void;
    handleCanCloseChapter: (canClose: boolean) => void;
    onLevelUpComplete: () => void;
}

export default function MatchComponent({ 
    match, 
    setIsGameOver, 
    handleCanCloseChapter,
    onLevelUpComplete,
}: MatchComponentProps) {
    
    const player = match.getPlayer();
    const baddie = match.getBaddie();
    const pogOwners = match.getPogOwners();

    const awardXP = baddie.getXPbyLevel() || 0;

    const [openMenuPogId, setOpenMenuPogId] = useState<string | null>(null);    
    const [inPlayPogs, setInPlayPogs] = useState<PogClass[]>(() => match.getInPlayPogs().slice());
    const [visualStack, setVisualStack] = useState<PogClass[]>(() => match.getStack().slice());   
    const [currentBaddieHitpoints, setCurrentBaddieHitpoints] = useState(baddie.getCurrentHitpoints());
    const [currentBaddieDefense, setCurrentBaddieDefense] = useState(baddie.getDefense());
    const [currentPlayerDefense, setCurrentPlayerDefense] = useState(player.getDefense());
    const [currentPlayerHitpoints, setCurrentPlayerHitpoints] = useState(player.getCurrentHitpoints());
    const [flippedPogIds, setFlippedPogIds] = useState<string[]>(() => match.getSnapshot().flippedPogIds);
    const [canReStack, setCanReStack] = useState(() => match.getCanReStack());
    const [canEndTurn, setCanEndTurn] = useState(() => match.getCanEndTurn());
    const [playerBoons, setPlayerBoons] = useState<{ [key: string]: Boon }>(player.getBoons());
    const [canPlayAll, setCanPlayAll] = useState(() => match.getCanPlayAll());

    const isVictoryScreenOpen = currentBaddieHitpoints <= 0;
    const isGameOver = currentPlayerHitpoints <= 0;

    const user = useContext<User | null>(UserContext);
    const isAdmin = user?.getRole() === "admin";

    const playerXPBeforeVictory = match.getPlayerXPBeforeVictory();

    function syncState(snapshot: MatchSnapshot) {
        setCurrentBaddieHitpoints(snapshot.baddieHitpoints);
        setCurrentBaddieDefense(snapshot.baddieDefense);
        setCurrentPlayerHitpoints(snapshot.playerHitpoints);
        setCurrentPlayerDefense(snapshot.playerDefense);
        setPlayerBoons(snapshot.playerBoons);
        setVisualStack(snapshot.stack);
        setInPlayPogs(snapshot.inPlayPogs);
        setCanReStack(snapshot.canReStack);
        setCanEndTurn(snapshot.canEndTurn);
        setCanPlayAll(snapshot.canPlayAll);
        setFlippedPogIds(snapshot.flippedPogIds);
    }

    useEffect(() => {
        if (isGameOver) {
            setIsGameOver(true);
        }
    }, [isGameOver, setIsGameOver]);

    useEffect(() => {
        if (isVictoryScreenOpen && match.getStatus() !== 'completed') {
            match.awardVictory();
        }
    }, [isVictoryScreenOpen, match]);

    function handleStackClick() {
        match.slam();
        syncState(match.getSnapshot());
    }

    function handleReStackClick() {
        match.restack();
        syncState(match.getSnapshot());
        setOpenMenuPogId(null)
    }

    function handleInPlayPogClick(pog: PogClass) {
        if (pogOwners.get(pog.getId()) === player.getId()) {
            setOpenMenuPogId(pog.getId());
        } else {
            setOpenMenuPogId(null);
        }
    }

    function handleUseClick(pog: PogClass) {
        match.usePog(pog.getId());
        syncState(match.getSnapshot());
        setOpenMenuPogId(null);
    }

    function handleFlipClick(pog: PogClass) {
        match.flipPog(pog.getId());
        syncState(match.getSnapshot());
        setOpenMenuPogId(null);
    }

    function handleEndTurn() {
        match.endTurn();
        syncState(match.getSnapshot());
        setOpenMenuPogId(null)
    }

    function handlePlayAllClick() {
        match.playAll();
        syncState(match.getSnapshot());
        setCanPlayAll(match.getCanPlayAll());
        setOpenMenuPogId(null)
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
                        {(isAdmin || canPlayAll) && (
                            <button onClick={handlePlayAllClick}>
                                {isAdmin ? "DEV: Play All" : "Play All"}
                            </button>
                        )}
                        {(isAdmin || canReStack) && (
                            <button onClick={handleReStackClick}>
                                {isAdmin ? "DEV: Re-stack" : "Re-stack"}
                            </button>
                        )}
                    </div>
                    <StackToolTip length={visualStack.length}>
                        <StackComponent stack={visualStack} onClick={handleStackClick} />
                    </StackToolTip>
                    <div className="match-arena-bottom-side">
                        {(isAdmin || canEndTurn) && (
                            <button onClick={handleEndTurn}>
                                {isAdmin ? "DEV: End Turn" : "End Turn"}
                            </button>
                        )}
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
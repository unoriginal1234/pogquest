import { useEffect, useContext } from "react";

import { UserContext } from "../context/UserContext";
import User from "../classes/User";

import MatchClass from "../classes/Match";
import PogClass from "../classes/Pog";

import useMatch from "../hooks/useMatch";

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
    
    const {
        snapshot,
        openMenuPogId,
        player,
        baddie,
        pogOwners,
        awardXP,
        playerXPBeforeVictory,
        slam,
        restack,
        playPog,
        flipPog,
        endTurn,
        playAll,
        handleInPlayPogClick,
    } = useMatch(match);

    const isVictoryScreenOpen = snapshot.baddieHitpoints <= 0;
    const isGameOver = snapshot.playerHitpoints <= 0;

    const user = useContext<User | null>(UserContext);
    const isAdmin = user?.getRole() === "admin";

    useEffect(() => {
        if (isGameOver) {
            setIsGameOver(true);
        }
    }, [isGameOver, setIsGameOver]);

    function handlePlayClick(pog: PogClass) {
        playPog(pog.getId());
    }

    function handleFlipClick(pog: PogClass) {
        flipPog(pog.getId());
    }

    if (isVictoryScreenOpen) {
        if (match.getStatus() !== 'completed') {
            match.awardVictory();
        }
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
            <BaddieComponent baddie={baddie} currentBaddieHitpoints={snapshot.baddieHitpoints} currentBaddieDefense={snapshot.baddieDefense} />
            <div className="match-arena">
                <InPlayPogsComponent 
                    inPlayPogs={snapshot.inPlayPogs}
                    openMenuPogId={openMenuPogId}
                    pogOwners={pogOwners}
                    playerId={player.getId()}
                    handleInPlayPogClick={handleInPlayPogClick}
                    handlePlayClick={handlePlayClick}
                    handleFlipClick={handleFlipClick}
                    flippedPogIds={snapshot.flippedPogIds}
                    canFlip={snapshot.stack.length > 0}
                />
                <div className="match-arena-bottom">
                    <div className="match-arena-bottom-side">
                        {(isAdmin || snapshot.canPlayAll) && (
                            <button onClick={playAll}>
                                {isAdmin ? "DEV: Play All" : "Play All"}
                            </button>
                        )}
                        {(isAdmin || snapshot.canReStack) && (
                            <button onClick={restack}>
                                {isAdmin ? "DEV: Re-stack" : "Re-stack"}
                            </button>
                        )}
                    </div>
                    <StackToolTip length={snapshot.stack.length}>
                        <StackComponent stack={snapshot.stack} onClick={slam} />
                    </StackToolTip>
                    <div className="match-arena-bottom-side">
                        {(isAdmin || snapshot.canEndTurn) && (
                            <button onClick={endTurn}>
                                {isAdmin ? "DEV: End Turn" : "End Turn"}
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <PlayerComponent 
                player={player} 
                currentPlayerDefense={snapshot.playerDefense} 
                currentPlayerHitpoints={snapshot.playerHitpoints} 
                playerBoons={snapshot.playerBoons}
            />
        </div>
    );
}

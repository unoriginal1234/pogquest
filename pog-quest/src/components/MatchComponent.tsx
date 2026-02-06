import { useState, useEffect } from "react";

import MatchClass from "../classes/Match";
import BaddieComponent from "./BaddieComponent";
import PlayerComponent from "./PlayerComponent";
import StackComponent from "./StackComponent";
import InPlayPogsComponent from "./InPlayPogsComponent";
import PogClass from "../classes/Pog";
import VictoryScreen from "./VictoryScreen";

export default function MatchComponent({ match }: { match: MatchClass }) {
    const player = match.getPlayer();
    const baddie = match.getBaddie();
    const pogOwners = match.getPogOwners();
    const playerSlammer = player.getSlammers()[0];
    const awardGold = baddie.getGold() + player.getGold();
    const awardXP = baddie.getXPbyLevel() || 0;

    const [openMenuPogId, setOpenMenuPogId] = useState<string | null>(null);    
    const [ inPlayPogs, setInPlayPogs ] = useState<PogClass[]>(() => match.getInPlayPogs().slice());
    const [ visualStack, setVisualStack ] = useState<PogClass[]>(() => match.getStack().slice());   
    const [currentBaddieHitpoints, setCurrentBaddieHitpoints] = useState(baddie.getCurrentHitpoints());
    const [currentPlayerDefense, setCurrentPlayerDefense] = useState(player.getDefense());

    const isVictoryScreenOpen = baddie.getCurrentHitpoints() <= 0;

    useEffect(() => {
        if (isVictoryScreenOpen && match.getStatus() !== 'completed') {
            match.endMatch();
            player.setGold(awardGold);
            player.addExperiencePoints(awardXP);
        }
    }, [isVictoryScreenOpen, match, awardGold, player, awardXP]);
    

    function handleStackClick() {
        const { flippedStack, remainingStack } = playerSlammer.slam(visualStack);
        setInPlayPogs(flippedStack);
        setVisualStack(remainingStack);
        match.setInPlayPogs(flippedStack);
        match.setStack(remainingStack);
    }

    function handleReStackClick() {
        match.setNewStack();
        match.setInPlayPogs([]);
        setVisualStack(match.getStack().slice());
        setInPlayPogs([]);
    }

    function handleInPlayPogClick(pog: PogClass) {
        if (pogOwners.get(pog.getId()) === player.getId()) {
            setOpenMenuPogId(pog.getId());
        } else {
            setOpenMenuPogId(null);
        }
    }

    function handleUseClick(pog: PogClass) {
        const pogStrength = (pog.getStrength());
        
        const pogDefense = (pog.getDefense());

        match.addToPlayedPogs(pog);
        const newInPlayPogs = match.getInPlayPogs().filter(pogs => pogs.getId() !== pog.getId());
        match.setInPlayPogs(newInPlayPogs);

        setInPlayPogs(match.getInPlayPogs().slice());
        
        // it doesn't look like we're setting the baddie logic here, so need to do that
        setCurrentPlayerDefense(currentPlayerDefense + pogDefense);
        baddie.setCurrentHitpoints(currentBaddieHitpoints - pogStrength);
        setCurrentBaddieHitpoints(currentBaddieHitpoints - pogStrength);
        setOpenMenuPogId(null);
    }

    function handleFlipUpClick(pog: PogClass) {
        console.log("flip up", pog);
        setOpenMenuPogId(null);
    }

    if (isVictoryScreenOpen) {
        return (
            <VictoryScreen baddieGold={baddie.getGold()} awardXP={awardXP} />
        );
    }

    return (
            
            
            <div className="match-layout">
            <BaddieComponent baddie={baddie} currentBaddieHitpoints={currentBaddieHitpoints} />
            <div className="match-arena">
                <StackComponent stack={visualStack} onClick={handleStackClick} />
                <InPlayPogsComponent 
                    inPlayPogs={inPlayPogs}
                    openMenuPogId={openMenuPogId}
                    pogOwners={pogOwners}
                    playerId={player.getId()}
                    handleInPlayPogClick={handleInPlayPogClick}
                    handleUseClick={handleUseClick}
                    handleFlipUpClick={handleFlipUpClick}
                />
                <button onClick={handleReStackClick}>
                    Re-stack
                </button>
            </div>
            <PlayerComponent player={player} currentPlayerDefense={currentPlayerDefense} />
            </div>
            
            
        
    );
}
import { useState } from "react";

import MatchClass from "../classes/Match";
import BaddieComponent from "./BaddieComponent";
import PlayerComponent from "./PlayerComponent";
import StackComponent from "./StackComponent";
import InPlayPogsComponent from "./InPlayPogsComponent";
import PogClass from "../classes/Pog";

export default function MatchComponent({ match }: { match: MatchClass }) {

    match.startMatch();
    const player = match.getPlayer();
    const baddie = match.getBaddie();
    // const pogs = match.getPogs();
    const stack = match.getStack();
    const pogOwners = match.getPogOwners();
    
    console.log(pogOwners);

    const playerSlammer = player.getSlammers()[0];
    
    const [ inPlayPogs, setInPlayPogs ] = useState<PogClass[]>( match.getInPlayPogs() );
    const [ visualStack, setVisualStack ] = useState<PogClass[]>( match.getStack() );   

    function handleStackClick() {
        const { flippedStack, remainingStack } = playerSlammer.slam(visualStack);
        setInPlayPogs(flippedStack);
        setVisualStack(remainingStack);
        match.setInPlayPogs(flippedStack);
        match.setStack(remainingStack);
    }

    function handleReStackClick() {
        setVisualStack(stack.slice());
        setInPlayPogs([]);
    }

    return (
        <div className="match-layout">
            <BaddieComponent baddie={baddie} />
            <div className="match-arena">
                <StackComponent stack={visualStack} onClick={handleStackClick} />
                <InPlayPogsComponent inPlayPogs={inPlayPogs} />
                <button onClick={handleReStackClick}>
                    Re-stack
                </button>
            </div>
            <PlayerComponent player={player} />
        </div>
    );
}
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

    console.log(match);
    console.log(baddie, 'baddie');
    console.log(player, 'player');
    console.log(pogOwners, 'pogOwners');
    console.log(stack, 'stack');
    console.log(player.getSlammers(), 'slammers');

    const playerSlammer = player.getSlammers()[0];
    console.log(playerSlammer, 'playerSlammer');

    
    const [ inPlayPogs, setInPlayPogs ] = useState<PogClass[]>([]);
    const [ visualStack, setVisualStack ] = useState<PogClass[]>(stack);

    function handleStackClick() {
        const { flippedStack, remainingStack } = playerSlammer.slam(visualStack);
        setInPlayPogs(flippedStack);
        setVisualStack(remainingStack);
        
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
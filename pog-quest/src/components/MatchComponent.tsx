
import MatchClass from "../classes/Match";
import BaddieComponent from "./BaddieComponent";
import PlayerComponent from "./PlayerComponent";
import StackComponent from "./StackComponent";


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

    const stackPreview = stack.slice(0, 4);

    return (
        <div className="match-layout">
            <BaddieComponent baddie={baddie} />
            <StackComponent stack={stackPreview} />
            <PlayerComponent player={player} />
        </div>
    );
}

import MatchClass from "../classes/Match";


export default function MatchComponent({ match }: { match: MatchClass }) {
    match.startMatch();

    const player = match.getPlayer();
    const baddie = match.getBaddie();
    // const pogs = match.getPogs();
    const stack = match.getStack();
    const pogOwners = match.getPogOwners();

    console.log(match);

    console.log(player, baddie, stack, pogOwners);

    return (
        <div>
            <h1>Match</h1>
        </div>
    );
}
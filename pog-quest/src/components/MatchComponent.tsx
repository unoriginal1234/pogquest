import MatchClass from "../classes/Match";

export default function MatchComponent({ match }: { match: MatchClass }) {
    
    const player = match.getPlayer();
    const baddie = match.getBaddie();
    const pogs = match.getPogs();

    console.log(player, baddie, pogs);

    return (
        <div>
            <h1>Match</h1>
        </div>
    );
}
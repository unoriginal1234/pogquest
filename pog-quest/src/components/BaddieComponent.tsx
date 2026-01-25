import BaddieClass from "../classes/Baddie";

export default function BaddieComponent({ baddie }: { baddie: BaddieClass }) {
    return (
        <div>
            <h2>{baddie.getName()}</h2>
            <p>Level: {baddie.getLevel()}</p>
            <p>Gold: {baddie.getGold()}</p>
            <p>Pogs: {baddie.getPogs().length}</p>
        </div>
    );
}
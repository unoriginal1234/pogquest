import Pog from "../classes/Pog";
import PogComponent from "./Pog";

export default function LevelUpScreen({levelUpOptions, newLevel}: { levelUpOptions: { [key: number]: { pogs: Pog[] } }, newLevel: number }) {
    return (
        <div>
            <h1>Level Up</h1>

            {levelUpOptions[newLevel].pogs.map((pog: Pog) => (
                <div key={pog.getId()}>
                    <h2>{pog.getName()}</h2>
                    <PogComponent pog={pog} isFlippedUp={false} onClick={() => {}} />
                </div>
            ))}
        </div>
    );
}
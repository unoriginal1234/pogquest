import BaddieClass from "../classes/Baddie";
import StatBar from "./StatBar";

export default function BaddieComponent({ 
    baddie, 
    currentBaddieHitpoints,
    currentBaddieDefense
 }: { 
        baddie: BaddieClass, 
        currentBaddieHitpoints: number,
        currentBaddieDefense: number }) {
   
    return (
        <div className="combatant-panel">
            {currentBaddieHitpoints > 0 ? <h2>{baddie.getName()}</h2> : <h2>Baddie Defeated</h2>}
            <p>Level: {baddie.getLevel()}</p>
            <p>Pogs: {baddie.getPogs().length}</p>
            <StatBar current={currentBaddieHitpoints} max={baddie.getMaxHitpoints()} label="HP" variant="hp" />
            <StatBar current={currentBaddieDefense} max={currentBaddieDefense} label="DEF" variant="defense" />
        </div>
    );
}
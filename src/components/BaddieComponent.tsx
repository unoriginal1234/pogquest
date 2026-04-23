import BaddieClass from "../classes/Baddie";
import StatBar from "./StatBar";
import BoonNerfBox from "./BoonNerfBox";

export default function BaddieComponent({ 
    baddie, 
    currentBaddieHitpoints,
    currentBaddieDefense
 }: { 
        baddie: BaddieClass, 
        currentBaddieHitpoints: number,
        currentBaddieDefense: number }) {
   
    return (
        <div className="combatant-panel-row">
            <div className="combatant-panel">
                <div className="combatant-identity">
                    {currentBaddieHitpoints > 0 ? <span className="combatant-name">{baddie.getName()}</span> : <span className="combatant-name">Baddie Defeated</span>}
                    <span className="combatant-detail">Pogs: {baddie.getPogs().length}</span>
                </div>
                <div className="combatant-bars">
                    <StatBar current={currentBaddieHitpoints} max={baddie.getMaxHitpoints()} label="HP" variant="hp" />
                    <StatBar current={currentBaddieDefense} max={baddie.getMaxHitpoints()} label="DEF" variant="defense" />
                </div>
            </div>
            <BoonNerfBox boons={{}} nerfs={{}} />
        </div>
    );
}
import BaddieClass from "../classes/Baddie";

export default function BaddieComponent({ 
    baddie, 
    currentBaddieHitpoints,
    currentBaddieDefense
 }: { 
        baddie: BaddieClass, 
        currentBaddieHitpoints: number,
        currentBaddieDefense: number }) {
   
    return (
        <div>
            {currentBaddieHitpoints > 0 ? <h2>{baddie.getName()}</h2> : <h2>Baddie Defeated</h2>}
            <p>Level: {baddie.getLevel()}</p>
            <p>Gold: {baddie.getGold()}</p>
            <p>Pogs: {baddie.getPogs().length}</p>
            <p>Current Hitpoints: {currentBaddieHitpoints}</p>
            <p>Current Defense: {currentBaddieDefense}</p>
        </div>
    );
}
import { useState,useEffect } from "react";
import BaddieClass from "../classes/Baddie";

export default function BaddieComponent({ baddie }: { baddie: BaddieClass }) {

    const [currentHitpoints, setCurrentHitpoints] = useState(baddie.getCurrentHitpoints());

    useEffect(() => {
        console.log(baddie);
    }, []);

    function handleTakeDamageClick() {
        setCurrentHitpoints(currentHitpoints - 2);
    }

    return (
        <div>
            <h2>{baddie.getName()}</h2>
            <p>Level: {baddie.getLevel()}</p>
            <p>Gold: {baddie.getGold()}</p>
            <p>Pogs: {baddie.getPogs().length}</p>
            <p>Current Hitpoints: {currentHitpoints}</p>
            <button onClick={handleTakeDamageClick}>Take Damage</button>
        </div>
    );
}
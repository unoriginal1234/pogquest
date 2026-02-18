import { useState } from "react";

import AdventureClass from "../../classes/Adventure";
import PlayerClass from "../../classes/Player";
import PogClass from "../../classes/Pog";

import PogComponent from "../Pog";

export default function TradeComponent({ 
    adventure, trade, isTradeCompleted, player, tradePog }: { 
        adventure: AdventureClass, 
        trade: (selectedPog: PogClass) => void, 
        isTradeCompleted: boolean, 
        player: PlayerClass, 
        tradePog: PogClass }) {

    const pogs = player.getPogs();
    const [selectedPog, setSelectedPog] = useState<PogClass | null>(null);

    function handlePogClick(pog: PogClass) {
        setSelectedPog(pog);
    }

    return (
        <div>
        <h1>Adventure</h1>
        <p>{adventure.getName()}</p>
        <p>{adventure.getDescription()}</p>
        <p>{adventure.getTemplateDescription()}</p>
        <div className="trade-pog-container">
            <PogComponent pog={tradePog} isFlippedUp={false} onClick={() => {}} />
        </div>
        <div className="player-trade-pog-container">
            <h2>Your Pogs</h2>
            <div className="pog-grid">
                {pogs.map((pog: PogClass) => (
                    <PogComponent key={pog.getId()} pog={pog} isFlippedUp={false} onClick={() => handlePogClick(pog)} 
                    isSelected={selectedPog?.getId() === pog.getId()}/>
                ))}
            </div>
        </div>

        {
            !selectedPog || (selectedPog && selectedPog.getGold() < tradePog.getGold()) ? (
                
                <div className='tooltip' data-tip={`Pick a pog worth trading`} >
                <button 
                    className='tooltip' 
                        disabled={true}>No Trade!
                    </button>
                </div>
            ) : (
                <div className='tooltip' data-tip={`Trade your selected pog to get the trade pog.`} >
                    <button 
                        onClick={() => trade(selectedPog!)} 
                        disabled={isTradeCompleted}>{isTradeCompleted ? 'Trading...' : 'Trade'}
                    </button>
                </div>
            )
        }
       
    </div>
    );
}
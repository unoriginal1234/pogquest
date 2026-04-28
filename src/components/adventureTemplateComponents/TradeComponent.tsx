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

    const eligiblePogs = player.getPogs().filter(
        (pog: PogClass) => pog.getGold() >= tradePog.getGold()
    );
    const [selectedPog, setSelectedPog] = useState<PogClass | null>(null);

    function handlePogClick(pog: PogClass) {
        setSelectedPog(pog);
    }

    return (
        <div className="trade-component">
            <div className="trade-header">
                <h2>{adventure.getName()}</h2>
                <p>{adventure.getDescription()}</p>
                <p>{adventure.getTemplateDescription()}</p>
            </div>
            <div className="trade-layout">
                <div className="trade-offer-section">
                    <div className="trade-pog-container">
                        <PogComponent pog={tradePog} isFlippedUp={false} onClick={() => {}} />
                    </div>
                    {
                        !selectedPog ? (
                            <div className='tooltip' data-tip={`Pick a pog worth trading`}>
                                <button disabled={true}>No Trade!</button>
                            </div>
                        ) : (
                            <div className='tooltip' data-tip={`Trade your selected pog to get the trade pog.`}>
                                <button
                                    onClick={() => trade(selectedPog!)}
                                    disabled={isTradeCompleted}>{isTradeCompleted ? 'Trading...' : 'Trade'}
                                </button>
                            </div>
                        )
                    }
                </div>
                <div className="player-trade-pog-container">
                    <h2>Your Pogs ({eligiblePogs.length})</h2>
                    {eligiblePogs.length === 0 ? (
                        <p className="trade-no-pogs">No pogs valuable enough to trade.</p>
                    ) : (
                        <div className="pog-grid">
                            {eligiblePogs.map((pog: PogClass) => (
                                <PogComponent key={pog.getId()} pog={pog} isFlippedUp={false} onClick={() => handlePogClick(pog)}
                                    isSelected={selectedPog?.getId() === pog.getId()} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
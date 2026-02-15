import AdventureClass from "../../classes/Adventure";
import PlayerClass from "../../classes/Player";
import PogClass from "../../classes/Pog";

import PogComponent from "../Pog";


export default function TradeComponent({ 
    adventure, trade, isTradeCompleted, player, tradePog }: { 
        adventure: AdventureClass, 
        trade: () => void, 
        isTradeCompleted: boolean, 
        player: PlayerClass, 
        tradePog: PogClass }) {

    const pogs = player.getPogs();




    return (
        <div>
        <h1>Adventure</h1>
        <p>{adventure.getName()}</p>
        <p>{adventure.getDescription()}</p>
        <p>{adventure.getTemplateDescription()}</p>
        <PogComponent pog={tradePog} isFlippedUp={false} onClick={() => {}} />
        <div className="pog-grid">
            {pogs.map((pog: PogClass) => (
                <PogComponent pog={pog} isFlippedUp={false} onClick={() => {}} />
            ))}
        </div>
        <button 
            className='tooltip' 
            data-tip={`Trade with the trader to get a pog.`} 
            onClick={trade} 
            disabled={isTradeCompleted}>{isTradeCompleted ? 'Trading...' : 'Trade'}
        </button>
    </div>
    );
}
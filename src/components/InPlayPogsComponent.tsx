import PogClass from "../classes/Pog";
import Pog from "./Pog";

interface InPlayPogsProps {
    inPlayPogs: PogClass[];
    openMenuPogId: string | null;
    pogOwners: Map<string, string>;
    playerId: string;
    handleInPlayPogClick: (pog: PogClass) => void;
    handlePlayClick: (pog: PogClass) => void;
    handleFlipClick: (pog: PogClass) => void;
    flippedPogIds: string[];
    canFlip: boolean;
}

export default function InPlayPogsComponent({
    inPlayPogs,
    openMenuPogId,
    pogOwners,
    playerId,
    handleInPlayPogClick,
    handlePlayClick,
    handleFlipClick,
    flippedPogIds,
    canFlip,
}: InPlayPogsProps) {
    
    
    return (
        <div className="flex flex-wrap gap-4 justify-center">
            {inPlayPogs.map((pog) => (
                <div key={pog.getId()} className="relative">
                    <Pog 
                        pog={pog} 
                        onClick={() => handleInPlayPogClick(pog)} 
                        isBaddiePog={pogOwners.get(pog.getId()) !== playerId}
                        isFlippedUp={flippedPogIds.includes(pog.getId())}
                    />
                    {openMenuPogId === pog.getId() && (
                        <div
                            className="menu menu-sm rounded-box bg-base-200 shadow-lg absolute left-0 mt-2 z-20 p-2"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                className="btn btn-ghost btn-sm justify-start"
                                onClick={() => handlePlayClick(pog)}
                            >
                                Play
                            </button>
                            <div className={!canFlip ? "tooltip" : ""} data-tip={!canFlip ? "Can't flip to an empty Stack" : undefined}>
                                <button
                                    className="btn btn-ghost btn-sm justify-start"
                                    onClick={() => handleFlipClick(pog)}
                                    disabled={!canFlip}
                                >
                                    Flip
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
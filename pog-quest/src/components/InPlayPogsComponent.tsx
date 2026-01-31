import PogClass from "../classes/Pog";
import Pog from "./Pog";

interface InPlayPogsProps {
    inPlayPogs: PogClass[];
    openMenuPogId: string | null;
    pogOwners: Map<string, string>;
    playerId: string;
    handleInPlayPogClick: (pog: PogClass) => void;
    handleUseClick: (pog: PogClass) => void;
    handleFlipUpClick: (pog: PogClass) => void;
}

export default function InPlayPogsComponent({
    inPlayPogs,
    openMenuPogId,
    pogOwners,
    playerId,
    handleInPlayPogClick,
    handleUseClick,
    handleFlipUpClick,
}: InPlayPogsProps) {
    
    
    return (
        <div className="flex flex-wrap gap-4">
            {inPlayPogs.map((pog) => (
                <div key={pog.getId()} className="relative">
                    <Pog 
                        pog={pog} 
                        onClick={() => handleInPlayPogClick(pog)} 
                        isBaddiePog={pogOwners.get(pog.getId()) !== playerId}
                    />
                    {openMenuPogId === pog.getId() && (
                        <div
                            className="menu menu-sm rounded-box bg-base-200 shadow-lg absolute left-0 mt-2 z-20 p-2"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                className="btn btn-ghost btn-sm justify-start"
                                onClick={() => handleUseClick(pog)}
                            >
                                Use
                            </button>
                            <button
                                className="btn btn-ghost btn-sm justify-start"
                                onClick={() => handleFlipUpClick(pog)}
                            >
                                Flip
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
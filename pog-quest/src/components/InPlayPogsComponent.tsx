import PogClass from "../classes/Pog";
import Pog from "./Pog";

export default function InPlayPogsComponent(
    { inPlayPogs, 
        openMenuPogId, 
        handleInPlayPogClick, 
        handleUseClick, 
        handleFlipUpClick }: 
        { inPlayPogs: PogClass[], 
            openMenuPogId: string | null, 
            handleInPlayPogClick: (pog: PogClass) => void, 
            handleUseClick: (pog: PogClass) => void, 
            handleFlipUpClick: (pog: PogClass) => void }
) {
    
    
    return (
        <div className="flex flex-wrap gap-4">
            {inPlayPogs.map((pog) => (
                <div key={pog.getId()} className="relative">
                    <Pog pog={pog} onClick={() => handleInPlayPogClick(pog)} />
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
import { useState } from "react";
import PogClass from "../classes/Pog";
import Pog from "./Pog";

export default function InPlayPogsComponent({ inPlayPogs }: { inPlayPogs: PogClass[] }) {
    const [openMenuPogId, setOpenMenuPogId] = useState<string | null>(null);

    function handleInPlayPogClick(pog: PogClass) {
        setOpenMenuPogId((current) => (current === pog.getId() ? null : pog.getId()));
    }

    function handleUseClick(pog: PogClass) {
        console.log("use", pog);
        setOpenMenuPogId(null);
    }

    function handleFlipUpClick(pog: PogClass) {
        console.log("flip up", pog);
        setOpenMenuPogId(null);
    }

    
    
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
                                Flip up
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
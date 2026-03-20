import { useState, useEffect } from "react";

interface FloorDescriptionProps {
    storyTitle: string;
    floorDescription: string;
    setIsFloorDescriptionOpen: (isFloorDescriptionOpen: boolean) => void;
}

export default function FloorDescription({ storyTitle, floorDescription, setIsFloorDescriptionOpen }: FloorDescriptionProps) {
    const [phase, setPhase] = useState<"title" | "description" | "ready">("title");
    const [displayedText, setDisplayedText] = useState("");
    const [skipped, setSkipped] = useState(false);

    useEffect(() => {
        if (phase !== "title") return;
        const titleTimer = setTimeout(() => setPhase("description"), 1200);
        return () => clearTimeout(titleTimer);
    }, [phase]);

    useEffect(() => {
        if (phase !== "description") return;
        if (displayedText.length < floorDescription.length) {
            const charTimer = setTimeout(() => {
                setDisplayedText(floorDescription.slice(0, displayedText.length + 1));
            }, 28);
            return () => clearTimeout(charTimer);
        }
        const readyTimer = setTimeout(() => setPhase("ready"), 400);
        return () => clearTimeout(readyTimer);
    }, [phase, displayedText, floorDescription]);

    const skipAnimation = () => {
        if (phase !== "ready") {
            setSkipped(true);
            setDisplayedText(floorDescription);
            setPhase("ready");
        }
    };

    return (
        <div className="floor-desc-overlay" onClick={skipAnimation}>
            <div className="floor-desc-corner floor-desc-corner--tl" />
            <div className="floor-desc-corner floor-desc-corner--tr" />
            <div className="floor-desc-corner floor-desc-corner--bl" />
            <div className="floor-desc-corner floor-desc-corner--br" />

            <div className="floor-desc-card">
                <div className="floor-desc-divider floor-desc-divider--top" />

                <h1 className={`floor-desc-title ${phase !== "title" ? "floor-desc-title--visible" : ""}`}>
                    {storyTitle}
                </h1>

                <div className="floor-desc-divider floor-desc-divider--mid" />

                <p className={`floor-desc-text ${phase === "description" || phase === "ready" ? "floor-desc-text--visible" : ""}`}>
                    {displayedText}
                    {phase === "description" && displayedText.length < floorDescription.length && (
                        <span className="floor-desc-cursor">_</span>
                    )}
                </p>

                <div className="floor-desc-divider floor-desc-divider--bottom" />

                <button
                    className={`floor-desc-enter ${phase === "ready" ? (skipped ? "floor-desc-enter--visible-instant" : "floor-desc-enter--visible") : ""}`}
                    onClick={(e) => { e.stopPropagation(); setIsFloorDescriptionOpen(false); }}
                >
                    Begin
                </button>
            </div>
        </div>
    );
}
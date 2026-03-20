import { useState, useEffect } from "react";

interface ChapterDescriptionProps {
    chapterTitle?: string;
    description: string;
    buttonLabel: string;
    onProceed: () => void;
    showButton: boolean;
}

export default function ChapterDescription({
    chapterTitle,
    description,
    buttonLabel,
    onProceed,
    showButton,
}: ChapterDescriptionProps) {
    const [phase, setPhase] = useState<"title" | "description" | "ready">(
        chapterTitle ? "title" : "description"
    );
    const [displayedText, setDisplayedText] = useState("");
    const [skipped, setSkipped] = useState(false);

    useEffect(() => {
        if (phase !== "title" || !chapterTitle) return;
        const timer = setTimeout(() => setPhase("description"), 1000);
        return () => clearTimeout(timer);
    }, [phase, chapterTitle]);

    useEffect(() => {
        if (phase !== "description") return;
        if (displayedText.length < description.length) {
            const timer = setTimeout(() => {
                setDisplayedText(description.slice(0, displayedText.length + 1));
            }, 28);
            return () => clearTimeout(timer);
        }
        const readyTimer = setTimeout(() => setPhase("ready"), 400);
        return () => clearTimeout(readyTimer);
    }, [phase, displayedText, description]);

    const skipAnimation = () => {
        if (phase !== "ready") {
            setSkipped(true);
            setDisplayedText(description);
            setPhase("ready");
        }
    };

    return (
        <div
            className={`ch-desc-container${!showButton && phase === "ready" ? " ch-desc-container--will-fade" : ""}`}
            onClick={skipAnimation}
        >
            <div className="ch-desc-divider ch-desc-divider--top" />

            {chapterTitle && (
                <h2
                    className={`ch-desc-title ${
                        phase !== "title" ? "ch-desc-title--visible" : ""
                    }`}
                >
                    {chapterTitle}
                </h2>
            )}

            <div className="ch-desc-divider ch-desc-divider--mid" />

            <p
                className={`ch-desc-text ${
                    phase === "description" || phase === "ready"
                        ? "ch-desc-text--visible"
                        : ""
                }`}
            >
                {displayedText}
                {phase === "description" &&
                    displayedText.length < description.length && (
                        <span className="ch-desc-cursor">_</span>
                    )}
            </p>

            <div className="ch-desc-divider ch-desc-divider--bottom" />

            {showButton && (
                <button
                    className={`ch-desc-enter ${
                        phase === "ready" ? (skipped ? "ch-desc-enter--visible-instant" : "ch-desc-enter--visible") : ""
                    }`}
                    onClick={(e) => { e.stopPropagation(); onProceed(); }}
                >
                    {buttonLabel}
                </button>
            )}
        </div>
    );
}

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
    // useEffect(() => {
    //     fetch('http://127.0.0.1:7825/ingest/b490d155-cec4-4e8a-b369-26abecb8ab09',
    //         {method:'POST',
    //             headers:{'Content-Type':'application/json','X-Debug-Session-Id':'dd99b4'},
    //             body:JSON.stringify(
    //                 {sessionId:'dd99b4',
    //                     location:'ChapterDescription.tsx:mount',
    //                     message:'ChapterDescription MOUNTED (fresh instance)',
    //                     data:{chapterTitle,description},
    //                     timestamp:Date.now(),
    //                     hypothesisId:'A'})})
    //                     .catch(()=>{});
    // }, []);
    // // #endregion

    useEffect(() => {
        if (!chapterTitle) return;
        const timer = setTimeout(() => setPhase("description"), 1000);
        return () => clearTimeout(timer);
    }, [chapterTitle]);

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

    return (
        <div className={`ch-desc-container${!showButton && phase === "ready" ? " ch-desc-container--will-fade" : ""}`}>
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
                        phase === "ready" ? "ch-desc-enter--visible" : ""
                    }`}
                    onClick={onProceed}
                >
                    {buttonLabel}
                </button>
            )}
        </div>
    );
}

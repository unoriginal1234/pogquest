import { useState } from "react";
import Game from "../classes/Game";
import Story from "../classes/Story";
import Chapter from "../classes/Chapter";

export default function GameStoryPanel({ game }: { game: Game }) {

    const [story] = useState<Story>(game.getStory());
    const [currentChapter, setCurrentChapter] = useState<Chapter>(story.getCurrentChapter());
    const [chapterNumber, setChapterNumber] = useState<number>(story.getChapterNumber());
    const [completionType, setCompletionType] = useState(currentChapter.getCompletionType());
    const [unlockedChapters, setUnlockedChapters] = useState<number[]>(story.getUnlockedChapters());
    // const [unlockedChapterCount, setUnlockedChapterCount] = useState<number>(unlockedChapters.length);
    // const [totalChapterCount] = useState<number>(story.getChapterCount());

    function handleChapterClick(chapterNumber: number) {
        console.log("Setting chapter number to", chapterNumber);
        story.setCurrentChapter(chapterNumber);
        const nextChapter = story.getChapter(chapterNumber);
        setCurrentChapter(nextChapter);
        setChapterNumber(story.getChapterNumber());
        setCompletionType(nextChapter.getCompletionType());
        
        // setUnlockedChapterCount(nextUnlockedChapters.length);
    }

    function handleCloseCurrentChapter() {
        story.closeChapter();
        setUnlockedChapters(story.getUnlockedChapters());
        setChapterNumber(story.getChapterNumber());
        setCurrentChapter(story.getCurrentChapter());
        setCompletionType(currentChapter.getCompletionType());
    }

   
    return (
        <section className="demo-section pog-border">
            <h2>{story.getTitle()}</h2>
            <p className="pog-glow-blue">
                Chapter {chapterNumber}:
                <p className="pog-glow-green">{currentChapter.getTitle()}</p>
                <p>{currentChapter.getDescription()}</p>
            </p>
           
            <p className="pog-glow-blue">Completion Type: {completionType.constructor.name}</p>

            <div className="button-group">
                {unlockedChapters.map((chapterNumber: number) => (
                    <button key={chapterNumber} onClick={() => handleChapterClick(chapterNumber)}>
                        {chapterNumber  + 1}
                    </button>
                ))}
            </div>
            <button onClick={handleCloseCurrentChapter}>Close Current Chapter</button>
        </section>
    );
}

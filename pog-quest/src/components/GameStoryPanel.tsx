import { useState } from "react";
import Game from "../classes/Game";
import Story from "../classes/Story";
import Chapter from "../classes/Chapter";

export default function GameStoryPanel({ game }: { game: Game }) {

    const [story, setStory ] = useState<Story>(game.getStory());
    console.log("Story", story);
    const [currentChapter, setCurrentChapter] = useState<Chapter>(story.getCurrentChapter());
    const [chapterNumber, setChapterNumber] = useState<number>(story.getChapterNumber());
    const [completionType, setCompletionType] = useState(currentChapter.getCompletionType());
    const [unlockedChapters, setUnlockedChapters] = useState<number[]>(story.getUnlockedChapters());
    // const [unlockedChapterCount, setUnlockedChapterCount] = useState<number>(unlockedChapters.length);
    // const [totalChapterCount] = useState<number>(story.getChapterCount());

    console.log("Unlocked chapters in component", unlockedChapters);

    function handleChapterClick(chapterNumber: number) {
        console.log("Setting chapter number to", chapterNumber);
        story.setCurrentChapter(chapterNumber);
        const nextChapter = story.getChapter(chapterNumber);
        setCurrentChapter(nextChapter);
        setChapterNumber(story.getChapterNumber());
        setCompletionType(nextChapter.getCompletionType());
        setStory(story);
    }

    function handleCloseCurrentChapter() {
        console.log("Unlocked chapters before closing", story.getUnlockedChapters());
        story.closeChapter();
        console.log("Unlocked chapters after closing", story.getUnlockedChapters());

        setUnlockedChapters(story.getUnlockedChapters());
        setChapterNumber(story.getChapterNumber());
        setCurrentChapter(story.getCurrentChapter());
        setCompletionType(currentChapter.getCompletionType());
        setStory(story);
    }

    // need to handle the case where the current chapter is the last chapter
    // for now, we'll just disable the button if the current chapter is the last chapter
   
    return (
        <section className="demo-section pog-border">
            <h2>{story.getTitle()}</h2>
            <span className="pog-glow-blue">
                Chapter {chapterNumber} :
                <p className="pog-glow-green">{currentChapter.getTitle()}</p>
                <p>{currentChapter.getDescription()}</p>
            </span>
           
            <p className="pog-glow-blue">Completion Type: {completionType.constructor.name}</p>

            <div className="button-group">
                {unlockedChapters.map((chapterNumber: number) => (
                    <button key={chapterNumber} onClick={() => handleChapterClick(chapterNumber)}>
                        {chapterNumber}
                    </button>
                ))}
            </div>
            <button 
                onClick={handleCloseCurrentChapter}
                disabled={chapterNumber === story.getChapterCount() - 1}>
                    Close Current Chapter
            </button>
        </section>
    );
}

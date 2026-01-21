import { useState } from "react";
import Game from "../classes/Game";
import Story from "../classes/Story";
import Chapter from "../classes/Chapter";

export default function GameStoryPanel({ game }: { game: Game }) {

    const [story, setStory ] = useState<Story>(game.getStory());

    const [currentChapter, setCurrentChapter] = useState<Chapter>(story.getCurrentChapter());
    const [chapterNumber, setChapterNumber] = useState<number>(story.getChapterNumber());
    const [completionType, setCompletionType] = useState(currentChapter.getCompletionType());
    const [unlockedChapters, setUnlockedChapters] = useState<number[]>(story.getUnlockedChapters());
    const [chapterDescription, setChapterDescription] = useState<string>(currentChapter.getDescription()[0]);
    const [chapterTitle, setChapterTitle] = useState<string>(currentChapter.getTitle());

    function handleChapterClick(chapterNumber: number) {
        story.setCurrentChapter(chapterNumber);
        const nextChapter = story.getChapter(chapterNumber);
        
        setCurrentChapter(nextChapter);
        setChapterNumber(story.getChapterNumber());
        setCompletionType(nextChapter.getCompletionType());
        setChapterDescription(nextChapter.getDescription()[0]);
        setChapterTitle(nextChapter.getTitle());
        setStory(story);
        
    }

    function handleCloseCurrentChapter() {
        story.closeChapter();
        const nextChapter = story.getCurrentChapter();
        
        setUnlockedChapters(story.getUnlockedChapters());
        setChapterNumber(story.getChapterNumber());
        setCurrentChapter(nextChapter);
        setCompletionType(nextChapter.getCompletionType());
        setChapterDescription(nextChapter.getDescription()[0]);
       
        setChapterTitle(nextChapter.getTitle());
        setStory(story);
    }

    // need to handle the case where the current chapter is the last chapter
    // for now, we'll just disable the button if the current chapter is the last chapter
   
    return (
        <section className="demo-section pog-border">
            <h2>{story.getTitle()}</h2>
            <span className="pog-glow-blue">
                Chapter {chapterNumber} :
                <p className="pog-glow-green">{chapterTitle}</p>
                <p className="pog-glow-blue">{chapterDescription}</p>
                <button onClick={() => setChapterDescription(currentChapter.getDescription()[1])}>Next</button>
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

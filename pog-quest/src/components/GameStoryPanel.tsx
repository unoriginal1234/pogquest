import { useState } from "react";
import Game from "../classes/Game";
import Story from "../classes/Story";
import Chapter from "../classes/Chapter";
import Floor from "../classes/Floor";

export default function GameStoryPanel({ game }: { game: Game }) {

    const [story, setStory ] = useState<Story>(game.getStory());

    const [currentFloor, setCurrentFloor] = useState<Floor>(story.getCurrentFloor());

    const [currentChapter, setCurrentChapter] = useState<Chapter>(currentFloor.getCurrentChapter());
    const [chapterNumber, setChapterNumber] = useState<number>(currentFloor.getChapterNumber());
    const [completionType, setCompletionType] = useState(currentChapter.getCompletionType());
    const [unlockedChapters, setUnlockedChapters] = useState<number[]>(currentFloor.getUnlockedChapters());
    const [chapterDescription, setChapterDescription] = useState<string>(currentChapter.getDescription()[0]);
    const [chapterTitle, setChapterTitle] = useState<string>(currentChapter.getTitle());
    const [chapterDescriptionIndex, setChapterDescriptionIndex] = useState<number>(0);

    function handleChapterClick(chapterNumber: number) {
        currentFloor.setCurrentChapter(chapterNumber);
        const nextChapter = currentFloor.getChapter(chapterNumber);
        
        setCurrentChapter(nextChapter);
        setChapterNumber(currentFloor.getChapterNumber());
        setCompletionType(nextChapter.getCompletionType());
        setChapterDescription(nextChapter.getDescription()[0]);
        setChapterTitle(nextChapter.getTitle());
        setCurrentFloor(currentFloor);
        setStory(story);
        setChapterDescriptionIndex(0);
    }

    function handleCloseCurrentChapter() {
        currentFloor.closeChapter();
        const nextChapter = currentFloor.getCurrentChapter();
        
        setUnlockedChapters(currentFloor.getUnlockedChapters());
        setChapterNumber(currentFloor.getChapterNumber());
        setCurrentChapter(nextChapter);
        setCompletionType(nextChapter.getCompletionType());
        setChapterDescription(nextChapter.getDescription()[0]);
       
        setChapterTitle(nextChapter.getTitle());
        setCurrentFloor(currentFloor);
        setStory(story);
        setChapterDescriptionIndex(0);
    }

    // need to handle the case where the current chapter is the last chapter
    // for now, we'll just disable the button if the current chapter is the last chapter
   
    return (
        <section className="demo-section pog-border">
            <h2>{story.getTitle()}</h2>
            <p className="pog-glow-blue">{currentFloor.getDescription()}</p>
            <span className="pog-glow-blue">
                Chapter {chapterNumber} :
                <p className="pog-glow-green">{chapterTitle}</p>
                <p className="pog-glow-blue">{chapterDescription}</p>
                {chapterDescriptionIndex < currentChapter.getDescription().length - 1  && (
                    <button onClick={() => 
                        {
                            const nextChapterIndex = chapterDescriptionIndex + 1;
                            console.log(nextChapterIndex, "next chapter index");
                            setChapterDescriptionIndex(nextChapterIndex);
                            setChapterDescription(currentChapter.getDescription()[nextChapterIndex])}}>
                        Next
                    </button>)}
            </span>
           
            <p className="pog-glow-blue">Completion Type: {completionType.constructor.name}</p>

            {chapterDescriptionIndex === 0 ? <ChapterNavigator /> : null}

            <button 
                onClick={handleCloseCurrentChapter}
                disabled={chapterNumber === currentFloor.getChapterCount() - 1}>
                    Close Current Chapter
            </button>
        </section>
    );

    function ChapterNavigator(){
        return (
            <div className="button-group">
                {unlockedChapters.map((chapterNumber: number) => (
                    <button key={chapterNumber} onClick={() => handleChapterClick(chapterNumber)}>
                        {chapterNumber}
                    </button>
                ))}
            </div>
        )
    }
}

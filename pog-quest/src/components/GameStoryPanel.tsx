import { useState } from "react";
import Game from "../classes/Game";

import Chapter from "../classes/Chapter";
import Floor from "../classes/Floor";

export default function GameStoryPanel({ game }: { game: Game }) {

    const story = game.getStory();

    const [currentFloor, setCurrentFloor] = useState<Floor>(story.getCurrentFloor());

    const [currentChapter, setCurrentChapter] = useState<Chapter>(currentFloor.getCurrentChapter());
    const [chapterNumber, setChapterNumber] = useState<number>(currentFloor.getChapterNumber());
    const [completionType, setCompletionType] = useState(currentChapter.getCompletionType());
    const [unlockedChapters, setUnlockedChapters] = useState<number[]>(currentFloor.getUnlockedChapters());
    const [chapterDescription, setChapterDescription] = useState<string>(currentChapter.getDescription()[0]);
    const [chapterTitle, setChapterTitle] = useState<string>(currentChapter.getTitle());
    const [chapterDescriptionIndex, setChapterDescriptionIndex] = useState<number>(0);
    const [isFinalChpaterOpen, setIsFinalChpaterOpen] = useState<boolean>(false);

    function handleChapterClick(chapterNumber: number) {
        currentFloor.setCurrentChapter(chapterNumber);
        const nextChapter = currentFloor.getChapter(chapterNumber);
        
        setCurrentChapter(nextChapter);
        setChapterNumber(currentFloor.getChapterNumber());
        setCompletionType(nextChapter.getCompletionType());
        setChapterDescription(nextChapter.getDescription()[0]);
        setChapterTitle(nextChapter.getTitle());
        // setCurrentFloor(currentFloor);
        
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
        // setCurrentFloor(currentFloor);
        setChapterDescriptionIndex(0);
    }

    function handleNextFloor() {
        console.log("next floor");
        
        story.setCurrentFloorByIndex(story.getCurrentFloorIndex() + 1);
        
        const nextFloor = story.getCurrentFloor();
        console.log(nextFloor, "next floor");

        setCurrentFloor(nextFloor);
        setChapterNumber(nextFloor.getChapterNumber());
        setCurrentChapter(nextFloor.getCurrentChapter());
        setCompletionType(nextFloor.getCurrentChapter().getCompletionType());
        setChapterDescription(nextFloor.getCurrentChapter().getDescription()[0]);
        setChapterTitle(nextFloor.getCurrentChapter().getTitle());
        setUnlockedChapters(nextFloor.getUnlockedChapters());
        setChapterDescriptionIndex(0);
        setIsFinalChpaterOpen(false);
    }

    if (
        chapterNumber === currentFloor.getChapterCount() - 1 && 
        (chapterDescriptionIndex === currentChapter.getDescription().length - 1) &&
        !isFinalChpaterOpen) {
            setIsFinalChpaterOpen(true);
    }


   
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
            {isFinalChpaterOpen ? <button  
                disabled={story.getCurrentFloorIndex() === story.getFloorCount() - 1}
                onClick={handleNextFloor}>Next Floor</button> : null}
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

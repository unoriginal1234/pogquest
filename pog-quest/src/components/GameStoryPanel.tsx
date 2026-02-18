import { useEffect, useState } from "react";
import Game from "../classes/Game";

import Chapter from "../classes/Chapter";
import Floor from "../classes/Floor";
import Baddie from "../classes/Baddie";
import MatchClass from "../classes/Match";
import ShopClass from "../classes/Shop";
import AdventureClass from "../classes/Adventure";

import MatchComponent from "./MatchComponent";
import ShopComponent from "./ShopComponent";
import AdventureComponent from "./AdventureComponent";

import matchFactory from "../resources/matchFactory";

interface GameStoryPanelProps {
    game: Game;
    onEndGame: () => void;
}

export default function GameStoryPanel({ game, onEndGame }: GameStoryPanelProps) {

    const story = game.getStory();
    const player = game.getPlayer();

    const [currentFloor, setCurrentFloor] = useState<Floor>(story.getCurrentFloor());

    const [currentChapter, setCurrentChapter] = useState<Chapter>(currentFloor.getCurrentChapter());
    
    const [chapterNumber, setChapterNumber] = useState<number>(currentFloor.getChapterNumber());
    const [completionType, setCompletionType] = useState(currentChapter.getCompletionType());
    const [unlockedChapters, setUnlockedChapters] = useState<number[]>(currentFloor.getUnlockedChapters());
    const [chapterDescription, setChapterDescription] = useState<string>(currentChapter.getDescription()[0]);
    const [chapterTitle, setChapterTitle] = useState<string>(currentChapter.getTitle());
    const [chapterDescriptionIndex, setChapterDescriptionIndex] = useState<number>(0);
    const [isFinalChapterOpen, setIsFinalChapterOpen] = useState<boolean>(false);
    const [match, setMatch] = useState<MatchClass | null>(null);
    const [shop, setShop] = useState<ShopClass | null>(null);
    const [adventure, setAdventure] = useState<AdventureClass | null>(null);

    useEffect(() => {
        if (completionType instanceof Baddie) {
            const nextMatch = matchFactory(player, completionType);
            nextMatch.startMatch();
            setMatch(nextMatch);
        } else {
            setMatch(null);
        }
    }, [completionType, player]);

    useEffect(() => {
        if (completionType instanceof ShopClass) {
            setShop(completionType);
        } else {
            setShop(null);
        }
    }, [completionType]);

    useEffect(() => {
        if (completionType instanceof AdventureClass) {
            setAdventure(completionType);
        } else {
            setAdventure(null);
        }
    }, [completionType]);


    function handleChapterClick(chapterNumber: number) {
        currentFloor.setCurrentChapter(chapterNumber);
        const nextChapter = currentFloor.getChapter(chapterNumber);
        setCurrentChapter(nextChapter);
        setChapterNumber(currentFloor.getChapterNumber());
        setCompletionType(nextChapter.getCompletionType());
        setChapterDescription(nextChapter.getDescription()[0]);
        setChapterTitle(nextChapter.getTitle());
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
        setChapterDescriptionIndex(0);
    }

    function handleNextFloor() {        
        story.setCurrentFloorByIndex(story.getCurrentFloorIndex() + 1);
        const nextFloor = story.getCurrentFloor();
        setCurrentFloor(nextFloor);
        setChapterNumber(nextFloor.getChapterNumber());
        setCurrentChapter(nextFloor.getCurrentChapter());
        setCompletionType(nextFloor.getCurrentChapter().getCompletionType());
        setChapterDescription(nextFloor.getCurrentChapter().getDescription()[0]);
        setChapterTitle(nextFloor.getCurrentChapter().getTitle());
        setUnlockedChapters(nextFloor.getUnlockedChapters());
        setChapterDescriptionIndex(0);
        setIsFinalChapterOpen(false);
    }

    function handleCompleteStory() {
        game.endGame();
        onEndGame();
    }

    const atLastChapter = chapterNumber === currentFloor.getChapterCount() - 1;
    const atLastChapterDescription = chapterDescriptionIndex === currentChapter.getDescription().length - 1;
    const isLastFloor = story.getCurrentFloorIndex() === story.getFloorCount() - 1;
    const isLastChapterDescription = chapterDescriptionIndex === currentChapter.getDescription().length - 1;
    
    if (
        atLastChapter && 
        atLastChapterDescription &&
        !isFinalChapterOpen) {
            setIsFinalChapterOpen(true);
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
                    <button onClick={() => {
                        const nextChapterIndex = chapterDescriptionIndex + 1;
                        setChapterDescriptionIndex(nextChapterIndex);
                        setChapterDescription(currentChapter.getDescription()[nextChapterIndex])}}>
                            {chapterDescriptionIndex > 0 ? "Next" : "Enter"}
                    </button>)}
            </span>
           
            <p className="pog-glow-blue">Completion Type: {completionType.constructor.name}</p>

            {chapterDescriptionIndex === 0 ? <ChapterNavigator /> : null}

            {/* I like this but might want to not check for development purposes */}
            {isLastChapterDescription ? <>
            <button 
                onClick={handleCloseCurrentChapter}
                disabled={chapterNumber === currentFloor.getChapterCount() - 1}>
                    Close Current Chapter
            </button>
            {isFinalChapterOpen ? <button  
                disabled={isLastFloor}
                onClick={handleNextFloor}>Next Floor</button> : null}
            
            {isLastFloor && 
            isFinalChapterOpen &&
            atLastChapterDescription && 
            isLastChapterDescription ? 
            <button onClick={handleCompleteStory}>End Game</button> : null}
            
            <CompletionTypeComponent /> </> : null}
        </section>
    );

    function ChapterNavigator(){
        return (
            <div className="button-group">
                {unlockedChapters.map((chapterNumber: number) => (
                    
                    <button key={chapterNumber} onClick={() => handleChapterClick(chapterNumber)}>
                        {/* This is very messy and needs to be cleaned up */}
                        {NavButtonType(getNavButtonTypeByChapterNumber(chapterNumber))}
                    </button>
                ))}
            </div>
        )
    }

    function getNavButtonTypeByChapterNumber(chapterNumber: number) {
        return currentFloor.getChapter(chapterNumber).getCompletionType().constructor.name
    }

    function NavButtonType(string: string) {
        if (string === "Baddie") {
            return "👹"
        }
        if (string === "Shop") {
            return "🏪"
        }
        if (string === "Adventure") {
            return "👾"
        }
        return "something went wrong";
    }

    function CompletionTypeComponent() {
        if (completionType instanceof Baddie) {
            if (!match) {
                return null;
            }
            return <MatchComponent key={match.getBaddie().getId()} match={match} />;
        } else if (completionType.constructor.name === "Shop") {
            if (!shop) {
                return null;
            }
            return <ShopComponent shop={shop} player={player} />;
        } else if (completionType.constructor.name === "Adventure") {
            if (!adventure) {
                return null;
            }
            return <AdventureComponent adventure={adventure} player={player} />;
        } 
    }

}

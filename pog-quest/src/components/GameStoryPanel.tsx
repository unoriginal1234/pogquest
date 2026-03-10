import { useEffect, useState, useContext } from "react";
import Game from "../classes/Game";
import User from "../classes/User"; 
import { UserContext } from "../context/UserContext";

import Chapter from "../classes/Chapter";
import Floor from "../classes/Floor";
import Baddie from "../classes/Baddie";
import MatchClass from "../classes/Match";
import ShopClass from "../classes/Shop";
import AdventureClass from "../classes/Adventure";

import MatchComponent from "./MatchComponent";
import ShopComponent from "./ShopComponent";
import AdventureComponent from "./AdventureComponent";
import FinalChapterComponent from "./FinalChapterComponent";
import BaddieIcon from "../icons/BaddieIcon";
import ShopIcon from "../icons/ShopIcon";
import AdventureIcon from "../icons/AdventureIcon";

import matchFactory from "../resources/matchFactory";

// TODO: I want to see the baddie's name/type and level when selecting a baddie

interface GameStoryPanelProps {
    game: Game;
    onEndGame: (didLose: boolean) => void;
}

export default function GameStoryPanel({ game, onEndGame }: GameStoryPanelProps) {

    const user = useContext<User | null>(UserContext);
    const isAdmin = user?.getRole() === "admin";

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
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    const [canCloseChapter, setCanCloseChapter] = useState<boolean>(currentChapter.getCanClose());

    const [canGetToFinalChapter, setCanGetToFinalChapter] = useState<boolean>(currentFloor.canGetToFinalChapter());
    const [canCloseFloor, setCanCloseFloor] = useState<boolean>(currentFloor.getCanClose());
    const [showFinalChapter, setShowFinalChapter] = useState<boolean>(false);

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

    useEffect(() => {
        if (shop) {
            handleCanCloseChapter(true);
        }
    }, [shop]);

    function handleCanCloseChapter(canClose: boolean) {
        setCanCloseChapter(canClose);
    }

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
        setCanGetToFinalChapter(currentFloor.canGetToFinalChapter());  
        const nextChapter = canGetToFinalChapter ? currentFloor.getFinalChapter() : currentFloor.getCurrentChapter();
        
        setUnlockedChapters(currentFloor.getUnlockedChapters());

        if (canPlayerGetToFinalChapter) {
            setChapterDescription(nextChapter.getDescription()[0]);
            setChapterTitle(nextChapter.getTitle());
            setChapterDescriptionIndex(0);
            setCanCloseChapter(nextChapter.getCanClose());
            setShowFinalChapter(true);
            return;
        }

        setChapterNumber(currentFloor.getChapterNumber());
        setCurrentChapter(nextChapter);
        setCompletionType(nextChapter.getCompletionType());
        
        setChapterDescription(nextChapter.getDescription()[0]);
        setChapterTitle(nextChapter.getTitle());
        setChapterDescriptionIndex(0);
        setCanCloseChapter(nextChapter.getCanClose());
        setCanCloseFloor(currentFloor.getCanClose());

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
        setShowFinalChapter(false);
        setCanCloseFloor(false);
        setCanGetToFinalChapter(false);
    }

    function handleEnterFinalChapterClick() {
        setShowFinalChapter(true);
    }

    function handleCanCloseFloor(canClose: boolean) {
        currentFloor.setCanClose(canClose);
        setCanCloseFloor(canClose);
        setCanGetToFinalChapter(false);
    }

    function handleCompleteStory() {
        game.endGame();
        onEndGame(false);
    }

    // TO DO: I want to refactor so that when you complete all the chapters, you go to the final chapter instead of the next floor
    

    
    const atLastChapterDescription = chapterDescriptionIndex === currentChapter.getDescription().length - 1;
    const isLastFloor = story.getCurrentFloorIndex() === story.getFloorCount() - 1;
    const isLastChapterDescription = chapterDescriptionIndex === currentChapter.getDescription().length - 1;
    

    // TODO : Unbreak this in a second
    useEffect(() => {
        if (atLastChapterDescription && !isFinalChapterOpen) {
            setIsFinalChapterOpen(true);
        }
    }, [atLastChapterDescription, isFinalChapterOpen]);

    useEffect(() => {
        if (isGameOver) {
            onEndGame(true);
        }
    }, [isGameOver, onEndGame]);

    if (showFinalChapter) {
        return (
            <section className="demo-section pog-border">
                <h2>{story.getTitle()}</h2>
                <p className="pog-glow-blue">{currentFloor.getDescription()}</p>

                <FinalChapterComponent
                    finalChapter={currentFloor.getFinalChapter()}
                    player={player}
                    setIsGameOver={setIsGameOver}
                    handleCanCloseFloor={handleCanCloseFloor}
                />

                {canCloseFloor && !isLastFloor ? (
                    <button onClick={handleNextFloor}>Next Floor</button>
                ) : null}

                {canCloseFloor && isLastFloor ? (
                    <button onClick={handleCompleteStory}>Work in Progress: End Game</button>
                ) : null}
            </section>
        );
    }

    return (
        <section className="demo-section pog-border">
            <h2>{story.getTitle()}</h2>
            <p className="pog-glow-blue">{currentFloor.getDescription()}</p>
            <span className="pog-glow-blue">
                Chapter {chapterNumber} :
                <p className="pog-glow-green">{chapterTitle}</p>
                <p className="pog-glow-blue">{chapterDescription}</p>
                {(chapterDescriptionIndex < currentChapter.getDescription().length - 1) && (
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
            {isAdmin ? <button onClick={() => handleCloseCurrentChapter()}>Dev: Close Chapter</button> : 
           !canCloseChapter || canGetToFinalChapter ? null :
            <button 
                onClick={handleCloseCurrentChapter}>
                    Move On
            </button>}
            {canGetToFinalChapter ? <button onClick={handleEnterFinalChapterClick}>Final Chapter</button> : null}
            {isFinalChapterOpen ? <button  
                disabled={isLastFloor}
                onClick={handleNextFloor}>Work in Progress: Next Floor</button> : null}
            
            {isLastFloor && 
            isFinalChapterOpen &&
            atLastChapterDescription && 
            isLastChapterDescription ? 
            <button onClick={handleCompleteStory}>Work in Progress: End Game</button> : null}
            
            <CompletionTypeComponent /> </> : null}
        </section>
    );

    function ChapterNavigator(){
        return (
            <div className="button-group">
                {unlockedChapters.map((chapterNumber: number) => (
                    <button 
                        key={chapterNumber} 
                        className="nav-icon-button"
                        onClick={() => handleChapterClick(chapterNumber)}
                    >
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
            return <BaddieIcon size={72} />;
        }
        if (string === "Shop") {
            return <ShopIcon size={72} />;
        }
        if (string === "Adventure") {
            return <AdventureIcon size={72} />;
        }
        return "something went wrong";
    }

    function CompletionTypeComponent() {
        if (completionType instanceof Baddie) {
            if (!match) {
                return null;
            }
            return <MatchComponent 
            key={match.getBaddie().getId()} 
            match={match} 
            setIsGameOver={setIsGameOver} 
            handleCanCloseChapter={handleCanCloseChapter} />;
        } else if (completionType.constructor.name === "Shop") {
            if (!shop) {
                return null;
            }
            return <ShopComponent shop={shop} player={player} />;
        } else if (completionType.constructor.name === "Adventure") {
            if (!adventure) {
                return null;
            }
            return <AdventureComponent adventure={adventure} player={player} handleCanCloseChapter={handleCanCloseChapter}/>;
        } 
    }

}

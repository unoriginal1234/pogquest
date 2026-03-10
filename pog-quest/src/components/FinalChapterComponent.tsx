import { useState } from "react";

import FinalChapter from "../classes/FinalChapter";
import SuperBaddie from "../classes/SuperBaddie";
import PlayerClass from "../classes/Player";
import MatchClass from "../classes/Match";

import MatchComponent from "./MatchComponent";
import matchFactory from "../resources/matchFactory";

interface FinalChapterComponentProps {
    finalChapter: FinalChapter;
    player: PlayerClass;
    setIsGameOver: (isGameOver: boolean) => void;
    handleCanCloseFloor: (canClose: boolean) => void;
}

export default function FinalChapterComponent({
    finalChapter,
    player,
    setIsGameOver,
    handleCanCloseFloor,
}: FinalChapterComponentProps) {

    const superBaddie = finalChapter.getCompletionType() as SuperBaddie;

    const [isFighting, setIsFighting] = useState(false);
    const [match, setMatch] = useState<MatchClass | null>(null);

    function handleFightClick() {
        const newMatch = matchFactory(player, superBaddie);
        newMatch.startMatch();
        setMatch(newMatch);
        setIsFighting(true);
    }

    function handleCanCloseChapter(canClose: boolean) {
        if (canClose) {
            handleCanCloseFloor(true);
        }
    }

    if (isFighting && match) {
        return (
            <MatchComponent
                key={match.getBaddie().getId()}
                match={match}
                setIsGameOver={setIsGameOver}
                handleCanCloseChapter={handleCanCloseChapter}
            />
        );
    }

    return (
        <div>
            <h2 className="pog-glow-green">{finalChapter.getTitle()}</h2>
            {finalChapter.getDescription().map((desc, i) => (
                <p key={i} className="pog-glow-blue">{desc}</p>
            ))}

            <h3>{superBaddie.getName()}</h3>
            <p>Level: {superBaddie.getLevel()}</p>
            <p>HP: {superBaddie.getMaxHitpoints()}</p>
            <p>Super Power: {superBaddie.getSuperPower()}</p>
            <p>Gold: {superBaddie.getGold()}</p>
            <p>Pogs: {superBaddie.getPogs().length}</p>

            <button onClick={handleFightClick}>FIGHT</button>
        </div>
    );
}

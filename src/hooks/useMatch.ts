import { useState } from 'react';

import MatchClass from '../classes/Match';
import type { MatchSnapshot } from '../classes/Match';
import PogClass from '../classes/Pog';

export default function useMatch(match: MatchClass) {
    const [snapshot, setSnapshot] = useState<MatchSnapshot>(() => match.getSnapshot());
    const [openMenuPogId, setOpenMenuPogId] = useState<string | null>(null);

    const player = match.getPlayer();
    const baddie = match.getBaddie();
    const pogOwners = match.getPogOwners();
    const awardXP = baddie.getXPbyLevel() || 0;
    const playerXPBeforeVictory = match.getPlayerXPBeforeVictory();

    const sync = () => setSnapshot(match.getSnapshot());

    function slam() {
        match.slam();
        sync();
    }

    function restack() {
        match.restack();
        sync();
        setOpenMenuPogId(null);
    }

    function playPog(pogId: string) {
        match.playPog(pogId);
        sync();
        setOpenMenuPogId(null);
    }

    function flipPog(pogId: string) {
        match.flipPog(pogId);
        sync();
        setOpenMenuPogId(null);
    }

    function endTurn() {
        match.endTurn();
        sync();
        setOpenMenuPogId(null);
    }

    function playAll() {
        match.playAll();
        sync();
        setOpenMenuPogId(null);
    }

    function handleInPlayPogClick(pog: PogClass) {
        if (pogOwners.get(pog.getId()) === player.getId()) {
            setOpenMenuPogId(pog.getId());
        } else {
            setOpenMenuPogId(null);
        }
    }

    return {
        snapshot,
        openMenuPogId,
        player,
        baddie,
        pogOwners,
        awardXP,
        playerXPBeforeVictory,
        slam,
        restack,
        playPog,
        flipPog,
        endTurn,
        playAll,
        handleInPlayPogClick,
    };
}

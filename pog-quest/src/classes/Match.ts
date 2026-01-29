import Player from './Player';
import Baddie from './Baddie';
import Pog from './Pog';

export default class Match {
    player: Player;
    baddie: Baddie;
    pogs: Pog[];
    stack: Pog[];
    playedPogs: Pog[];
    inPlayPogs: Pog[];
    pogOwners: Map<string,string>;
    inProgress: boolean;

    constructor(player: Player, baddie: Baddie)
    {
        this.player = player;
        this.baddie = baddie;
        this.pogs = player.getPogs().concat(baddie.getPogs()).slice();
        this.stack = [];
        this.inPlayPogs = [];
        this.playedPogs = [];
        this.pogOwners = new Map();
        this.inProgress = false;
    }

    startMatch() {
        this.setPogOwners();
        this.setNewStack();
        this.inProgress = true;
    }

    setPogOwners() {
        const playerId = this.player.getId();
        const baddieId = this.baddie.getId();
        
        this.player.getPogs().forEach(pog => {
            this.pogOwners.set(pog.getId(), playerId);
        });
        this.baddie.getPogs().forEach(pog => {
            this.pogOwners.set(pog.getId(), baddieId);
        });
    }

    getPogOwner(pogId: string) {
        if (!this.pogOwners.has(pogId)) {
            return null;
            console.log('pog not found');
        }
        return this.pogOwners.get(pogId);
    }

    getPogOwners() {
        return this.pogOwners;
    }

    setNewStack() {
        this.stack = this.pogs.slice();
        // sort the stack by the pog's id a silly way to randomize
        // TODO: use a better randomization method
        this.stack.sort((a, b) => a.getId().localeCompare(b.getId()));
    }

    setStack(stack: Pog[]) {
        this.stack = stack;
    }

    setInPlayPogs(inPlayPogs: Pog[]) {
        this.inPlayPogs = inPlayPogs;
    }

    setPlayedPogs(playedPogs: Pog[]) {
        this.playedPogs = playedPogs;
    }

    addToPlayedPogs(pog: Pog) {
        this.playedPogs.push(pog);
    }

    getInPlayPogs() {
        return this.inPlayPogs;
    }

    getStack() {
        console.log('hiiiii')
        return this.stack;
    }

    getPlayer() {
        return this.player;
    }

    getBaddie() {
        return this.baddie;
    }

    getPogs() {
        return this.pogs;
    }

    getInProgress() {
        return this.inProgress;
    }

    endMatch() {
        this.inProgress = false;
    }
}
import Player from './Player';
import Baddie from './Baddie';
import Pog from './Pog';
import shuffleArray from '../helperFunctions/shuffle';

export default class Match {
    player: Player;
    baddie: Baddie;
    pogs: Pog[];
    stack: Pog[];
    playedPogs: Pog[];
    inPlayPogs: Pog[];
    pogOwners: Map<string,string>;
    inProgress: boolean;
    status: string;

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
        this.status = 'pending';
    }

    startMatch() {
        this.setPogOwners();
        this.setNewStack();
        this.inProgress = true;
        this.status = 'in progress';
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
        }
        return this.pogOwners.get(pogId);
    }

    getPogOwners() {
        return this.pogOwners;
    }

    setNewStack() {
        this.stack = this.pogs.slice(); 
        // shuffle the stack
        shuffleArray(this.stack);
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

    getStatus() {
        return this.status;
    }

    endMatch() {
        this.inProgress = false;
        this.status = 'completed';
    }
}
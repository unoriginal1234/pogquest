import Player from './Player';
import Baddie from './Baddie';
import Pog from './Pog';

export default class Match {
    player: Player;
    baddie: Baddie;
    pogs: Pog[];
    stack: Pog[];
    playedPogs: Pog[];

    constructor(player: Player, baddie: Baddie)
    {
        this.player = player;
        this.baddie = baddie;
        this.pogs = player.getPogs().concat(baddie.getPogs()).slice();
        this.stack = [];
        this.playedPogs = [];
    }

    startMatch() {
        this.stack = this.pogs.slice();
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
}
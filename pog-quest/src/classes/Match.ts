import Player from './Player';
import Baddie from './Baddie';
import Pog from './Pog';

export default class Match {
    player: Player;
    baddie: Baddie;
    pogs: Pog[];

    constructor(player: Player, baddie: Baddie)
    {
        this.player = player;
        this.baddie = baddie;
        this.pogs = player.getPogs().concat(baddie.getPogs());
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
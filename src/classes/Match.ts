import Player from './Player';
import Baddie from './Baddie';
import Pog from './Pog';
import shuffleArray from '../helperFunctions/shuffle';
import type { Boon, Damageable } from './types';

export interface MatchSnapshot {
    baddieHitpoints: number;
    baddieDefense: number;
    playerHitpoints: number;
    playerDefense: number;
    playerBoons: { [key: string]: Boon };
    stack: Pog[];
    inPlayPogs: Pog[];
    canReStack: boolean;
    canEndTurn: boolean;
    canSlam: boolean;
    canPlayAll: boolean;
    flippedPogIds: string[];
}

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
    playerLevelBeforeVictory: number;
    playerXPBeforeVictory: number;
    canSlam: boolean;
    canEndTurn: boolean;
    canReStack: boolean;
    canPlayAll: boolean;
    flippedPogIds: string[];

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
        this.playerLevelBeforeVictory = player.getLevel();
        this.playerXPBeforeVictory = player.getExperiencePoints();
        this.canSlam = true;
        this.canEndTurn = false;
        this.canReStack = false;
        this.canPlayAll = false;
        this.flippedPogIds = [];
    }

    getSnapshot(): MatchSnapshot {
        return {
            baddieHitpoints: this.baddie.getCurrentHitpoints(),
            baddieDefense: this.baddie.getDefense(),
            playerHitpoints: this.player.getCurrentHitpoints(),
            playerDefense: this.player.getDefense(),
            playerBoons: { ...this.player.getBoons() },
            stack: this.stack.slice(),
            inPlayPogs: this.inPlayPogs.slice(),
            canReStack: this.canReStack,
            canEndTurn: this.canEndTurn,
            canSlam: this.canSlam,
            canPlayAll: this.canPlayAll,
            flippedPogIds: this.flippedPogIds.slice(),
        };
    }

    private applyDamageToTarget(
        target: Damageable,
        strength: number,
        boons: { [key: string]: Boon } = {},
    ) {
        let remaining = strength;
        if (boons['beefer']) {
            remaining += boons['beefer'].value;
        }
        if (target.getDefense() > 0) {
            let newDefense = target.getDefense() - remaining;
            if (newDefense < 0) {
                remaining = -newDefense;
                newDefense = 0;
            } else {
                remaining = 0;
            }
            target.setDefense(newDefense);
        }
        target.setCurrentHitpoints(target.getCurrentHitpoints() - remaining);
    }

    private removePogFromPlay(pog: Pog) {
        this.addToPlayedPogs(pog);
        this.inPlayPogs = this.inPlayPogs.filter(p => p.getId() !== pog.getId());
    }

    playAll() {
        if (!this.canPlayAll) return;
        for (const pog of this.inPlayPogs) {
            if (this.pogOwners.get(pog.getId()) === this.player.getId()) {
                this.usePog(pog.getId());
            }
        }
        this.canPlayAll = false;
    }

    getCanPlayAll() {
        return this.canPlayAll;
    }

    setCanPlayAll(canPlayAll: boolean) {
        this.canPlayAll = canPlayAll;
    }

    flipPog(pogId: string) {
        this.flippedPogIds = [...this.flippedPogIds, pogId];
    }

    slam() {
        this.canEndTurn = true;
        this.setCanPlayAll(true);
        this.flippedPogIds = [];
        if (!this.canSlam) return;
        this.canSlam = false;
        this.player.setDefense(0);

        const playerSlammer = this.player.getEquippedSlammer();
        if (!playerSlammer) return;

        const { flippedStack, remainingStack, boons } = playerSlammer.slam(this.stack);

        if (boons) {
            for (const boon in boons) {
                this.player.removeBoon(boon);
                this.player.addBoon(boon, boons[boon]);
            }
        }

        this.inPlayPogs = flippedStack;
        this.stack = remainingStack;
    }

    usePog(pogId: string) {
        const pog = this.inPlayPogs.find(p => p.getId() === pogId);
        if (!pog) return;

        const boons = this.player.getBoons();
        if (boons['turtler']) {
            this.player.setDefense(this.player.getDefense() + boons['turtler'].value);
        }

        this.removePogFromPlay(pog);
        this.player.setDefense(this.player.getDefense() + pog.getDefense());
        this.applyDamageToTarget(this.baddie, pog.getStrength(), this.player.getBoons());
    }

    restack() {
        this.canReStack = false;
        this.baddie.setDefense(0);
        this.player.setDefense(0);
        this.setNewStack();
        this.inPlayPogs = [];
        this.flippedPogIds = [];
        this.canEndTurn = false;
        this.canSlam = true;
    }

    endTurn() {
        this.canEndTurn = false;
        this.baddie.setDefense(0);
        this.setCanPlayAll(false)

        const currentInPlayPogs = this.inPlayPogs.slice();

        for (const pog of currentInPlayPogs) {
            if (this.pogOwners.get(pog.getId()) === this.baddie.getId()) {
                this.baddie.setDefense(this.baddie.getDefense() + pog.getDefense());
                this.applyDamageToTarget(this.player, pog.getStrength());
                this.removePogFromPlay(pog);
            } else if (!this.flippedPogIds.includes(pog.getId())) {
                this.removePogFromPlay(pog);
            }
        }

        for (const pogId of this.flippedPogIds) {
            const pog = currentInPlayPogs.find(p => p.getId() === pogId);
            if (pog) {
                this.addToBottomOfStack(pog);
                this.inPlayPogs = this.inPlayPogs.filter(p => p.getId() !== pog.getId());
            }
        }

        const boons = this.player.getBoons();
        for (const boonName in boons) {
            boons[boonName].duration--;
            if (boons[boonName].duration <= 0) {
                this.player.removeBoon(boonName);
            }
        }
        this.player.setBoons({ ...this.player.getBoons() });

        this.flippedPogIds = [];

        if (this.stack.length <= 0) {
            this.canReStack = true;
        }
        this.canSlam = true;
    }

    awardVictory() {
        if (this.status === 'completed') return;
        const awardGold = this.baddie.getGold() + this.player.getGold();
        const awardXP = this.baddie.getXPbyLevel() || 0;
        this.player.setDefense(0);
        this.player.setGold(awardGold);
        this.player.addExperiencePoints(awardXP);
        this.player.setBoons({});
        this.endMatch();
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
        shuffleArray(this.stack);
    }

    setStack(stack: Pog[]) {
        this.stack = stack;
    }

    getStackCount() {
        return this.stack.length;
    }

    addToBottomOfStack(pog: Pog) {
        this.stack.push(pog);
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

    getInPlayPogsCount() {
        return this.inPlayPogs.length;
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

    getPlayerLevelBeforeVictory() {
        return this.playerLevelBeforeVictory;
    }

    getPlayerXPBeforeVictory() {
        return this.playerXPBeforeVictory;
    }

    getCanSlam() {
        return this.canSlam;
    }

    setCanSlam(canSlam: boolean) {
        this.canSlam = canSlam;
    }

    getCanEndTurn() {
        return this.canEndTurn;
    }

    setCanEndTurn(canEndTurn: boolean) {
        this.canEndTurn = canEndTurn;
    }

    getCanReStack() {
        return this.canReStack;
    }

    setCanReStack(canReStack: boolean) {
        this.canReStack = canReStack;
    }
}
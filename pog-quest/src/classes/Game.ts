import Player from './Player';
import Story from './Story';

export default class Game {
    _id: string;
    startTime: Date;
    player: Player;
    story: Story;
    endTime: Date | null;

    constructor(player: Player, story: Story) {
        this._id = crypto.randomUUID();
        this.startTime = new Date();
        this.player = player;
        this.story = story;
        this.endTime = null;
    }

    getId() {
        return this._id;
    }

    getStartTime() {
        return this.startTime;
    }

    getPlayer() {
        return this.player;
    }

    getStory() {
        return this.story;
    }

    endGame() {
        this.endTime = new Date();
    }
}
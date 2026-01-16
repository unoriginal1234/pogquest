import Player from './Player';
import Chapter from './Chapter';
import Story from './Story';
import Match from './Match';

export default class Game {
    _id: string;
    startTime: Date;
    player: Player;
    story: Story;
    chapter: Chapter;
    chapterNumber: number;
    match: Match | null;


    constructor(player: Player, story: Story) {
        this._id = crypto.randomUUID();
        this.startTime = new Date();
        this.player = player;
        this.story = story;
        this.chapter = story.getChapter(0);
        this.chapterNumber = 1;
        this.match = null;
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
    
    getChapter() {
        return this.chapter;
    }

    getStory() {
        return this.story;
    }

    getChapterNumber() {
        return this.chapterNumber;
    }
    
    getChapterTitle() {
        return this.chapter.getTitle();
    }

    getChapterDescription() {
        return this.chapter.getDescription();
    }

    getChapterReward() {
        return this.chapter.getChapterReward();
    }

    setChapterNumber(chapterNumber: number) {
        this.chapterNumber = chapterNumber;
    }
}
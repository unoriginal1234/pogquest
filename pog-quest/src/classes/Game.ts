import Player from './Player';
import Chapter from './Chapter';
import Story from './Story';
import Match from './Match';

export default class Game {
    player: Player;
    chapter: Chapter;
    story: Story;
    chapterNumber: number;
    chapterTitle: string;
    chapterDescription: string;
    chapterReward: number;
    chapterRewardDescription: string;
    match: Match | null;

    constructor(player: Player, chapter: Chapter, story: Story) {
        this.player = player;
        this.chapter = chapter;
        this.story = story;
        this.chapterNumber = 1;
        this.chapterTitle = "";
        this.chapterDescription = "";
        this.chapterReward = 0;
        this.chapterRewardDescription = "";
        this.match = null;
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
        return this.chapterTitle;
    }

    getChapterDescription() {
        return this.chapterDescription;
    }

    getChapterReward() {
        return this.chapterReward;
    }

    getChapterRewardDescription() {
        return this.chapterRewardDescription;
    }

    setChapterNumber(chapterNumber: number) {
        this.chapterNumber = chapterNumber;
    }
    
    
}
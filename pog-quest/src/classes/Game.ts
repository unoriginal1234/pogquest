import Player from './Player';
import Chapter from './Chapter';
import Story from './Story';
import Match from './Match';

export default class Game {
    player: Player;
    chapter: Chapter;
    story: Story;
    chapterNumber: number;
    match: Match | null;

    constructor(player: Player, chapter: Chapter, story: Story) {
        this.player = player;
        this.chapter = chapter;
        this.story = story;
        this.chapterNumber = 1;
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
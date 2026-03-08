import Chapter from './Chapter';
import FinalChapter from './FinalChapter';

export default class Floor {
    _id: string;
    name: string;
    chapters: Chapter[];
    description: string;
    unlockedChapters: number[];
    chapterNumber: number;
    currentChapter: Chapter;
    nextUnlockedChapter: number;
    finalChapter: FinalChapter;
    canClose: boolean;


    constructor(name: string, description: string, chapters: Chapter[], finalChapter: FinalChapter) {
        this._id = crypto.randomUUID();
        this.name = name;
        this.chapters = chapters;
        this.description = description;
        this.unlockedChapters = [0, 1];
        this.chapterNumber = 0;
        this.currentChapter = this.chapters[this.chapterNumber];
        this.nextUnlockedChapter = Math.max(...this.unlockedChapters) + 1;
        this.finalChapter = finalChapter;
        this.canClose = false;
    }

    canGetToFinalChapter() {
        return this.unlockedChapters.length === this.chapters.length - 1;
    }

    getFinalChapter() {
        return this.finalChapter;
    }

    setCanClose(canClose: boolean) {
        this.canClose = canClose;
    }

    getCanClose() {
        return this.canClose;
    }

    setCurrentChapter(chapterNumber: number) {
        this.currentChapter = this.chapters[chapterNumber];
        this.chapterNumber = chapterNumber;
    }

    closeChapter(){
        this.removeUnlockedChapter(this.chapterNumber);
        if (this.nextUnlockedChapter < this.chapters.length) {
            this.setUnlockedChapter(this.nextUnlockedChapter);
            this.nextUnlockedChapter++;
        }
        this.chapterNumber = this.unlockedChapters[this.unlockedChapters.length - 1];
        this.currentChapter = this.chapters[this.chapterNumber];
    }

    getChapterNumber() {
        return this.chapterNumber ;
    }

    removeUnlockedChapter(chapterNumber: number) {
        this.unlockedChapters = this.unlockedChapters.filter(chapter => chapter != chapterNumber);
    }

    getCurrentChapter() {
        return this.currentChapter;
    }

    getUnlockedChapters() {
        return this.unlockedChapters;
    }

    getUnlockedChapter(index: number) {
        return this.chapters[this.unlockedChapters[index]];
    }

    setUnlockedChapter(index: number) {
        this.unlockedChapters.push(index);
    }

    getDescription() {
        return this.description;
    }

    getId() {
        return this._id;
    }

    getName() {
        return this.name;
    }

    getChapters() {
        return this.chapters;
    }

    getChapter(index: number) {
        return this.chapters[index];
    }

    getChapterCount() {
        return this.chapters.length;
    }
}
import Chapter from './Chapter';

export default class Story {
    title: string;
    description: string;
    chapters: Chapter[];
    unlockedChapters: number[];
    chapterNumber: number;
    currentChapter: Chapter;
    nextUnlockedChapter: number;

    constructor(title: string, description: string, chapters: Chapter[]) {
        this.title = title;
        this.description = description;
        this.chapters = chapters;
        this.unlockedChapters = [0, 1];
        this.currentChapter = this.chapters[0];
        this.chapterNumber = 1;
        this.nextUnlockedChapter = Math.max(...this.unlockedChapters) + 1;
    }

    // story should handle the chapter progression and completion

    setCurrentChapter(chapterNumber: number) {
        this.currentChapter = this.chapters[chapterNumber];
        this.chapterNumber = chapterNumber;
    }

    closeChapter(){
        this.unlockedChapters.filter(chapter => chapter === this.chapterNumber);
        if (this.nextUnlockedChapter < this.chapters.length) {
            this.nextUnlockedChapter++;
        }
        this.unlockedChapters.push(this.nextUnlockedChapter);
        this.currentChapter = this.chapters[this.unlockedChapters[0]];
        this.chapterNumber = this.unlockedChapters[0];
    }

    getChapterNumber() {
        return this.chapterNumber + 1;
    }

    getCurrentChapter() {
        return this.chapters[this.unlockedChapters[this.unlockedChapters.length - 1]];
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

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
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

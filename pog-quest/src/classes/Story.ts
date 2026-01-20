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
        this.chapterNumber = 0;
        this.currentChapter = this.chapters[this.chapterNumber];
        this.nextUnlockedChapter = Math.max(...this.unlockedChapters) + 1;
    }

    // story should handle the chapter progression and completion

    // takes in a chapter index and sets the current chapter
    setCurrentChapter(chapterNumber: number) {
        this.currentChapter = this.chapters[chapterNumber];
        this.chapterNumber = chapterNumber;
    }

    // closes the current chapter and unlocks the next chapter
    // removes it from the unlocked chapters
    // if there is a next chapter, sets the next unlocked chapter to the next chapter
    // sets the current chapter to the first unlocked chapter
    // sets the chapter number to the first unlocked chapter
    closeChapter(){
        this.removeUnlockedChapter(this.chapterNumber);
        if (this.nextUnlockedChapter < this.chapters.length) {
            this.setUnlockedChapter(this.nextUnlockedChapter);
            this.nextUnlockedChapter++;
        }
        this.chapterNumber = this.unlockedChapters[0];
        this.currentChapter = this.chapters[this.chapterNumber];
    }

    getChapterNumber() {
        return this.chapterNumber;
    }

    removeUnlockedChapter(chapterNumber: number) {
        this.unlockedChapters = this.unlockedChapters.filter(chapter => chapter != chapterNumber);
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

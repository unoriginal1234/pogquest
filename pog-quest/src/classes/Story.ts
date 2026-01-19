import Chapter from './Chapter';

export default class Story {
    title: string;
    description: string;
    chapters: Chapter[];
    unlockedChapters: number[];
    currentChapter: Chapter;
    
    constructor(title: string, description: string, chapters: Chapter[]) {
        this.title = title;
        this.description = description;
        this.chapters = chapters;
        this.unlockedChapters = [0];
        this.currentChapter = this.chapters[0];
    }

    // story should handle the chapter progression and completion
    // should track

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

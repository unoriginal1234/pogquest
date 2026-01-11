import Chapter from './Chapter';

export default class Story {
    title: string;
    description: string;
    chapters: Chapter[];

    constructor(title: string, description: string, chapters: Chapter[]) {
        this.title = title;
        this.description = description;
        this.chapters = chapters;
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

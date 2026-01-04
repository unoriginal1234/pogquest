export default class Chapter {
    title: string;
    chapterNumber: number;
    description: string;
    
    constructor(title: string, description: string, chapterNumber: number) {
        this.title = title;
        this.description = description;
        this.chapterNumber = chapterNumber;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getChapterNumber() {
        return this.chapterNumber;
    }      
}
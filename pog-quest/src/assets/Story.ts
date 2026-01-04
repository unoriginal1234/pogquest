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
}

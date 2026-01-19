import Baddie from './Baddie';
import Shop from './Shop';
import Adventure from './Adventure';

export default class Chapter {
    _id: string;
    title: string;
    chapterNumber: number;
    description: string;
    completionType: Baddie | Shop | Adventure;

    constructor(
        title: string, 
        description: string, 
        chapterNumber: number,
        completionType: Baddie | Shop | Adventure
    ) {
        this._id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.chapterNumber = chapterNumber;
        this.completionType = completionType;
    }

    getId() {
        return this._id;
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
    
    getCompletionType() {
        return this.completionType;
    }
}
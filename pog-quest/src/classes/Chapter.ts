import Pog from './Pog';

export default class Chapter {
    title: string;
    chapterNumber: number;
    description: string;
    chapterReward: Pog[];

    constructor(title: string, description: string, chapterNumber: number) {
        this.title = title;
        this.description = description;
        this.chapterNumber = chapterNumber;
        this.chapterReward = [
            new Pog("Chapter Reward 1", 0, 0, 0, 0), 
            new Pog("Chapter Reward 2", 0, 0, 0, 0)
        ];
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
    
    getChapterReward() {
        return this.chapterReward;
    }
}
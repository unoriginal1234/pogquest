import Chapter from './Chapter';
import Floor from './Floor';

export default class Story {
    _id: string;
    title: string;
    description: string;
    chapters: Chapter[];
    unlockedChapters: number[];
    chapterNumber: number;
    currentChapter: Chapter;
    nextUnlockedChapter: number;
    floors: Floor[];
    currentFloorIndex: number;

    constructor(title: string, description: string, chapters: Chapter[], floors: Floor[]) {
        this._id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.chapters = chapters; // will remove this after implemented in floor
        this.unlockedChapters = [0, 1]; // will remove this after implemented in floor
        this.chapterNumber = 0; // will remove this after implemented in floor
        this.currentChapter = this.chapters[this.chapterNumber]; // will remove this after implemented in floor
        this.nextUnlockedChapter = Math.max(...this.unlockedChapters) + 1; // will remove this after implemented in floor
        this.floors = floors;
        this.currentFloorIndex = 0;
    }

    setCurrentFloor(floorNumber: number) {
        this.currentFloorIndex = floorNumber;
    }

    getCurrentFloor() {
        return this.floors[this.currentFloorIndex];
    }

    getCurrentFloorIndex() {
        return this.currentFloorIndex;
    }

    getFloors() {
        return this.floors;
    }


    getFloorCount() {
        return this.floors.length;
    }

    getId() {
        return this._id;
    }

    // takes in a chapter index and sets the current chapter
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
        return this.chapterNumber;
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

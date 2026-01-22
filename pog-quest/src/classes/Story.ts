import Floor from './Floor';

export default class Story {
    _id: string;
    title: string;
    description: string;
    floors: Floor[];
    currentFloorIndex: number;

    constructor(title: string, description: string, floors: Floor[]) {
        this._id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.floors = floors;
        this.currentFloorIndex = 0;
    }

    setCurrentFloorByIndex(floorNumber: number) {
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

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }    
}

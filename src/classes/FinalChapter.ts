import Chapter from './Chapter';
import SuperBaddie from './SuperBaddie';

export default class FinalChapter extends Chapter {

    canCloseFloor: boolean;

    constructor(title: string, description: string[], completionType: SuperBaddie) {
        super(title, description, completionType);
        this.canCloseFloor = false;
    }

    getCanCloseFloor() {
        return this.canCloseFloor;
    }

    setCanCloseFloor(canCloseFloor: boolean) {
        this.canCloseFloor = canCloseFloor;
    }

}
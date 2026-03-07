import Baddie from './Baddie';
import Shop from './Shop';
import Adventure from './Adventure';

export default class Chapter {
    _id: string;
    title: string;
    description: string[];
    completionType: Baddie | Shop | Adventure;
    canClose: boolean;

    constructor(
        title: string, 
        description: string[], 
        completionType: Baddie | Shop | Adventure
    ) {
        this._id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.completionType = completionType;
        this.canClose = false;
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
    
    getCompletionType() {
        return this.completionType;
    }

    getCanClose() {
        return this.canClose;
    }

    setCanClose(canClose: boolean) {
        this.canClose = canClose;
    }


}
import Baddie from './Baddie';
import Shop from './Shop';
import Adventure from './Adventure';

export default class Chapter {
    _id: string;
    title: string;
    description: string[];
    completionType: Baddie | Shop | Adventure;

    constructor(
        title: string, 
        description: string[], 
        completionType: Baddie | Shop | Adventure
    ) {
        this._id = crypto.randomUUID();
        this.title = title;
        this.description = description;
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
    
    getCompletionType() {
        return this.completionType;
    }
}
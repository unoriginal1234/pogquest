import Baddie from './Baddie';
import Pog from './Pog';

export default class SuperBaddie extends Baddie {
    superPower: string;

    constructor(name: string, pogs: Pog[], gold: number, level: number, superPower: string) {
        super(name, pogs, gold, level);
        this.superPower = superPower;
    }   

    getSuperPower() {
        return this.superPower;
    }

    useSuperPower() {
        console.log(`${this.name} uses ${this.superPower}!`);
    }
}
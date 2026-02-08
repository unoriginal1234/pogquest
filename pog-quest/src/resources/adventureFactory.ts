import Adventure from "../classes/Adventure";

export default function createAdventure(name: string, description: string, template: 'campfire' | 'chase' | 'chest' | 'trade') {
    return new Adventure(name, description, template);
}


import AdventureClass from "../classes/Adventure";

export default function AdventureComponent({ adventure }: { adventure: AdventureClass }) {
    return (
        <div>
            <h1>Adventure</h1>
            <p>{adventure.getName()}</p>
            <p>{adventure.getDescription()}</p>
            <p>{adventure.getTemplate()}</p>
        </div>
    );
}
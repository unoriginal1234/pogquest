import PogClass from "../classes/Pog";
import Pog from "./Pog";

export default function StackComponent({ stack }: { stack: PogClass[] }) {
    
    function handleStackClick(pogId: string) {
        console.log('stack clicked');
    }


    return (
        <div className="match-stack">
            {stack.map((pog, index) => (
                <div
                    key={pog.getId()}
                    className="match-stack-item"
                    style={{ zIndex: stack.length - index }}
                >
                    <Pog pog={pog} onClick={() => handleStackClick(pog.getId())} />
                </div>
            ))}
        </div>
    );
}
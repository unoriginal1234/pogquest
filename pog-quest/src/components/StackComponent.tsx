import PogClass from "../classes/Pog";
import Pog from "./Pog";

export default function StackComponent({ stack, onClick }: { stack: PogClass[], onClick: () => void }) {
    
    

    return (
        <div className="match-stack" onClick={stack.length > 0 ? onClick : undefined} >
            {stack.length === 0 ? (
                <div className="empty-stack-placeholder" />
            ) : (
                stack.map((pog, index) => (
                    <div
                        key={pog.getId()}
                        className="match-stack-item"
                        style={{ zIndex: stack.length - index }}
                    >
                        <Pog pog={pog} isFlippedUp={true} />
                    </div>
                ))
            )}
        </div>
    );
}
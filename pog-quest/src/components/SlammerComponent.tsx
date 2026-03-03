import SlammerClass from '../classes/Slammer';
import type { SlammerType } from '../classes/Slammer';

interface SlammerComponentProps {
    slammer: SlammerClass;
    isSelected?: boolean;
    isEquipped?: boolean;
    onClick?: () => void;
}

function SlammerArt({ type }: { type: SlammerType }) {
    if (type === 'turtler') {
        return <div className="slammer-art slammer-art-turtler" />;
    }
    if (type === 'beefer') {
        return <div className="slammer-art slammer-art-beefer" />;
    }
    return <div className="slammer-art slammer-art-flipper" />;
}

export default function SlammerComponent({slammer, isSelected, isEquipped, onClick}: SlammerComponentProps) {
    
    return (
        <div 
            className={`slammer-component ${isSelected ? 'selected' : ''} ${isEquipped ? 'equipped' : ''}`} 
            onClick={onClick}
        >
            <SlammerArt type={slammer.getSlammerType()} />
            <h3>{slammer.getName()}</h3>
            <p>{isEquipped ? 'Equipped' : ''}</p>
        </div>
    );
}
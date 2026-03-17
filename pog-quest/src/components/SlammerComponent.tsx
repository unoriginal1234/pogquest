import SlammerClass from '../classes/Slammer';
import type { SlammerType } from '../classes/Slammer';
import FlexIcon from '../icons/FlexIcon';
import TurtlerIcon from '../icons/TurtlerIcon';

interface SlammerComponentProps {
    slammer: SlammerClass;
    isSelected?: boolean;
    isEquipped?: boolean;
    onClick?: () => void;
}

function SlammerArt({ type }: { type: SlammerType }) {
    if (type === 'turtler') {
        return <TurtlerIcon size={54} />;
    }
    if (type === 'beefer') {
        return <FlexIcon size={54} />;
    }
    return <div className="slammer-art slammer-art-flipper" />;
}

export default function SlammerComponent({slammer, isSelected, isEquipped, onClick}: SlammerComponentProps) {
    const boons = slammer.getBoonsBySlamAbility();
    const boonEntry = boons ? Object.values(boons)[0] : null;

    return (
        <div 
            className={`slammer-component ${isSelected ? 'selected' : ''} ${isEquipped ? 'equipped' : ''}`} 
            onClick={onClick}
        >
            <div className="slammer-flip-count">
                {slammer.getAmountFlippedBySlamAbility()}
            </div>
            <SlammerArt type={slammer.getSlammerType()} />
            <h3>{slammer.getName()}</h3>
            <p>{isEquipped ? 'Equipped' : ''}</p>
            {boonEntry && (
                <>
                    <div className="slammer-boon-row">
                        <span className="slammer-boon-value">{boonEntry.value}</span>
                    </div>
                    <div className="slammer-boon-duration">{boonEntry.duration}</div>
                </>
            )}
        </div>
    );
}
import SlammerClass from '../classes/Slammer';
import type { SlammerType } from '../classes/Slammer';
import FlexIcon from '../icons/FlexIcon';
import TurtlerIcon from '../icons/TurtlerIcon';
import SlammerToolTip from './tooltips/slammerToolTip';

interface SlammerComponentProps {
    slammer: SlammerClass;
    isSelected?: boolean;
    isEquipped?: boolean;
    onClick?: () => void;
}

function SlammerArt({ type }: { type: SlammerType }) {
    if (type === 'beeferturtler') {
        return (
            <div className="slammer-art-combo">
                <FlexIcon size={42} className="slammer-art-combo-left" />
                <TurtlerIcon size={42} className="slammer-art-combo-right" />
            </div>
        );
    }
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
    const beeferBoon = boons?.['beefer'] ?? null;
    const turtlerBoon = boons?.['turtler'] ?? null;
    const hasBoons = beeferBoon || turtlerBoon;

    return (
        <SlammerToolTip slammer={slammer}>
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
                {hasBoons && (
                    <>
                        <div className="slammer-boon-row">
                            {beeferBoon && <span className="slammer-boon-value">{beeferBoon.value}</span>}
                            {turtlerBoon && <span className="slammer-boon-value-turtler">{turtlerBoon.value}</span>}
                        </div>
                        <div className="slammer-boon-duration">{(beeferBoon ?? turtlerBoon)!.duration}</div>
                    </>
                )}
            </div>
        </SlammerToolTip>
    );
}
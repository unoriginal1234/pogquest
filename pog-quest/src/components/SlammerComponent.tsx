import SlammerClass from '../classes/Slammer';

interface SlammerComponentProps {
    slammer: SlammerClass;
    isSelected?: boolean;
    isEquipped?: boolean;
    onClick?: () => void;
}

export default function SlammerComponent({slammer, isSelected, isEquipped, onClick}: SlammerComponentProps) {
    
    return (
        <div 
            className={`slammer-component ${isSelected ? 'selected' : ''} ${isEquipped ? 'equipped' : ''}`} 
            onClick={onClick}
        >
            <h3>{slammer.getName()}</h3>
            <p>{isEquipped ? 'Equipped' : ''}</p>
           
        </div>
    );
}
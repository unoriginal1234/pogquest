import SlammerClass from '../classes/Slammer';

interface SlammerComponentProps {
    slammer: SlammerClass;
    isSelected?: boolean;
    onClick?: () => void;
}

export default function SlammerComponent({slammer, isSelected, onClick}: SlammerComponentProps) {
    
    return (
        <div 
            className={`slammer-component ${isSelected ? 'selected' : ''}`} 
            onClick={onClick}
        >
            <h3>{slammer.getName()}</h3>
           
        </div>
    );
}
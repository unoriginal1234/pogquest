import AdventureClass from "../../classes/Adventure";

export default function CampfireComponent({ adventure, handleRest, hasRested }: { adventure: AdventureClass, handleRest: () => void, hasRested: boolean }) {
    return (
        <div>
                <h1>Adventure</h1>
                <p>{adventure.getName()}</p>
                <p>{adventure.getDescription()}</p>
                <p>{adventure.getTemplateDescription()}</p>
                <button 
                    className='tooltip'
                    data-tip={`hi there`}                
                    onClick={handleRest} 
                    disabled={hasRested}>{hasRested ? 'Resting...' : 'Rest'}
                </button>
            </div>
    );
}
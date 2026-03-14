import AdventureClass from "../../classes/Adventure";

export default function CampfireComponent({ adventure, handleRest, hasRested }: { adventure: AdventureClass, handleRest: () => void, hasRested: boolean }) {
    return (
        <div>
                <h2>{adventure.getName()}</h2>
                <p>{adventure.getDescription()}</p>
                <button 
                    className='tooltip'
                    data-tip={`hi there`}                
                    onClick={handleRest} 
                    disabled={hasRested}>{hasRested ? 'Resting...' : 'Rest'}
                </button>
            </div>
    );
}
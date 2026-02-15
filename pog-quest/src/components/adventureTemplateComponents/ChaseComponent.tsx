import AdventureClass from "../../classes/Adventure";

export default function ChaseComponent({ adventure, resolveChase, isChaseResolved }: { adventure: AdventureClass, resolveChase: () => void, isChaseResolved: boolean }) {
    return (
        <div>
            <h1>Adventure</h1>
            <p>{adventure.getName()}</p>
            <p>{adventure.getDescription()}</p>
            <p>{adventure.getTemplateDescription()}</p>
            <button 
                className='tooltip' 
                data-tip={`Resolve the chase to gain 5 hitpoints.`} 
                onClick={resolveChase} 
                disabled={isChaseResolved}>{isChaseResolved ? 'Chasing...' : 'Resolve Chase'}
            </button>
        </div>
    );
}
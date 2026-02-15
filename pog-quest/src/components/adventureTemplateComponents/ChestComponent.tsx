import AdventureClass from "../../classes/Adventure";

export default function ChestComponent({ adventure, openChest, isChestOpened }: { adventure: AdventureClass, openChest: () => void, isChestOpened: boolean }) {
    return (
        <div>
            <h1>Adventure</h1>
            <p>{adventure.getName()}</p>
            <p>{adventure.getDescription()}</p>
            <p>{adventure.getTemplateDescription()}</p>
            <button 
                className='tooltip' 
                data-tip={`Open the chest to get a pog.`} 
                onClick={openChest} 
                disabled={isChestOpened}>{isChestOpened ? 'Opening...' : 'Open Chest'}
            </button>
        </div>
    );
}
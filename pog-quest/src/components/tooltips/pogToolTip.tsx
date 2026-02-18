export default function PogToolTip({ children, tooltipText }: 
    { children: React.ReactNode, tooltipText: string }) {
    
    return (
        <div className="tooltip" >
            <div className="pog-tooltip-content">
                <div>{tooltipText}</div>
            </div>
            {children}
        </div>
    );
}
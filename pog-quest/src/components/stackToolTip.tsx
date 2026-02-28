import PogToolTip from "./tooltips/pogToolTip";
 
 export default function StackToolTip({ length, children }: { length: number, children: React.ReactNode }) {
    
    const tooltipText = `${length} pogs in the stack`;

    return <PogToolTip tooltipText={tooltipText}>{children}</PogToolTip>;
}
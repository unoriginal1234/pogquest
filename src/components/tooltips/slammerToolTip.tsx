import Slammer from "../../classes/Slammer";
import PogToolTip from "./pogToolTip";

export default function SlammerToolTip({ slammer, children }: { slammer: Slammer, children: React.ReactNode }) {
    const tooltipText = slammer.getDescription();
    return <PogToolTip tooltipText={tooltipText}>{children}</PogToolTip>;
}

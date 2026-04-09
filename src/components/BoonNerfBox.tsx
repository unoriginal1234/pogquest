import type { Boon, Nerf } from "../classes/types";

interface BoonNerfBoxProps {
    boons: { [key: string]: Boon };
    nerfs: { [key: string]: Nerf };
}

export default function BoonNerfBox({ boons, nerfs }: BoonNerfBoxProps) {
    const activeBoons = Object.values(boons).filter(b => b.duration > 0);
    const activeNerfs = Object.values(nerfs).filter(n => n.duration > 0);

    return (
        <div className="boon-nerf-box">
            <div className="boon-nerf-column">
                <span className="boon-nerf-header boon-header">Boons</span>
                {activeBoons.length === 0 ? (
                    <span className="boon-nerf-none">None</span>
                ) : (
                    activeBoons.map(boon => (
                        <div key={boon.name} className="boon-nerf-entry boon-entry">
                            <span className="boon-nerf-name">{boon.name}</span>
                            <span className="boon-nerf-value">{boon.value}</span>
                        </div>
                    ))
                )}
            </div>
            <div className="boon-nerf-divider" />
            <div className="boon-nerf-column">
                <span className="boon-nerf-header nerf-header">Nerfs</span>
                {activeNerfs.length === 0 ? (
                    <span className="boon-nerf-none">None</span>
                ) : (
                    activeNerfs.map(nerf => (
                        <div key={nerf.name} className="boon-nerf-entry nerf-entry">
                            <span className="boon-nerf-name">{nerf.name}</span>
                            <span className="boon-nerf-value">{nerf.value}</span>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

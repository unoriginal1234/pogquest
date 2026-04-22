interface StatBarProps {
    current: number;
    max: number;
    label: string;
    variant: 'hp' | 'defense';
}

export default function StatBar({ current, max, label, variant }: StatBarProps) {
    const fillPercent = max > 0 ? Math.min(Math.max(current / max * 100, 0), 100) : 0;

    return (
        <div className="stat-bar-container">
            <span className="stat-bar-label">{label}</span>
            <div className="stat-bar-ruler">
                <div className={`stat-bar-track stat-bar--${variant}`}>
                    <div
                        className="stat-bar-fill"
                        style={{ width: `${fillPercent}%` }}
                    />
                </div>
            </div>
            <span className="stat-bar-value">{current}</span>
        </div>
    );
}

export type Damageable = {
    getDefense: () => number;
    setDefense: (d: number) => void;
    getCurrentHitpoints: () => number;
    setCurrentHitpoints: (hp: number) => void;
};


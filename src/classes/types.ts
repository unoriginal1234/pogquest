export type Boon = {
    name: 'beefer' | 'turtler' | 'cruncher';
    description: string;
    value: number;
    duration: number;
  }

export type Nerf = {
    name: 'slo-mo' | 'freeze';
    description: string;
    value: number;
    duration: number;
  }

// NOTE: Boons should be kept clean. When joining boons on Slammers, the combination type is primarily visual, and we should keep the boons as clean as possible.

export type Damageable = {
    getDefense: () => number;
    setDefense: (d: number) => void;
    getCurrentHitpoints: () => number;
    setCurrentHitpoints: (hp: number) => void;
};
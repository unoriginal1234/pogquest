import { useEffect, useState } from "react";

import AdventureClass from "../classes/Adventure";
import PlayerClass from "../classes/Player";
import PogClass from "../classes/Pog";
import SlammerClass from "../classes/Slammer";
import type { SlammerType } from "../classes/Slammer";

import CampfireComponent from "./adventureTemplateComponents/CampfireComponent";
import ChaseComponent from "./adventureTemplateComponents/ChaseComponent";
import ChestComponent from "./adventureTemplateComponents/ChestComponent";
import TradeComponent from "./adventureTemplateComponents/TradeComponent";
import ForgeComponent from "./adventureTemplateComponents/ForgeComponent";
import LuckyComponent from "./adventureTemplateComponents/LuckyComponent";

import masterDemoSlammer from "../slammerResources/masterDemoSlammer";


// ToDo: move this to the factory directory
function createPog(n: number, name: string) {
    return new PogClass(name, n, 1, n, 1);
}

import { createPogByInput } from "../resources/pilotDemo_001";
const tradePog = createPogByInput({name: "Trade Pog", strength: Math.ceil(Math.random() * 10), defense: Math.ceil(Math.random() * 10)});

export default function AdventureComponent({ adventure, player, handleCanCloseChapter }: { adventure: AdventureClass, player: PlayerClass, handleCanCloseChapter: (canClose: boolean) => void }) {

    //TO DO: Need to make sure that the adventure is being checked for completion correctly

    const template = adventure.getTemplate();
    const [isComplete, setIsComplete] = useState(adventure.getIsComplete());
    const [hasRested, setHasRested] = useState(false);
    const [isChaseResolved, setIsChaseResolved] = useState(false);
    const [isChestOpened, setIsChestOpened] = useState(false);
    const [isTradeCompleted, setIsTradeCompleted] = useState(false);
    const [isForgeCompleted, setIsForgeCompleted] = useState(false);
    const [isLuckyCompleted, setIsLuckyCompleted] = useState(false);


    useEffect(() => {
        if (template === 'campfire' && isComplete) {
            handleCanCloseChapter(true);
        } else if (template === 'chase' && isComplete) {
            handleCanCloseChapter(true);
        } else if (template === 'chest' && !isComplete) {
            handleCanCloseChapter(true);
        } else if (template === 'trade' && !isComplete) {
            handleCanCloseChapter(true);
        } else if (template === 'forge' && !isComplete) {
            handleCanCloseChapter(true);
        } else if (template === 'lucky') {
            handleCanCloseChapter(true);
        }
    }, [template, isComplete, handleCanCloseChapter]);

    function handleRest() {
        player.setCurrentHitpoints(player.getCurrentHitpoints() + 10);
        setHasRested(true);
        adventure.setIsComplete(true);
        setIsComplete(true);
    }

    function resolveChase() {
        player.setCurrentHitpoints(player.getCurrentHitpoints() - 5);
        setIsChaseResolved(true);
        adventure.setIsComplete(true);
        setIsComplete(true);
        handleCanCloseChapter(true);
    }

    function openChest() {
        setIsChestOpened(true);
        adventure.setIsComplete(true);
        player.addPog(createPog(3, "Chest Pog"));
        setIsComplete(true);
    }

    function trade(selectedPog: PogClass) {
        setIsTradeCompleted(true);
        adventure.setIsComplete(true);
        player.addPog(tradePog);
        player.removePog(selectedPog!);
        setIsComplete(true);
    }

    function forge(slammer1: SlammerClass, slammer2: SlammerClass) {
        const flips = slammer1.getAmountFlippedBySlamAbility() + slammer2.getAmountFlippedBySlamAbility();

        const boons1 = slammer1.getBoonsBySlamAbility() ?? {};
        const boons2 = slammer2.getBoonsBySlamAbility() ?? {};

        const beeferValue = (boons1['beefer']?.value ?? 0) + (boons2['beefer']?.value ?? 0);
        const turtlerValue = (boons1['turtler']?.value ?? 0) + (boons2['turtler']?.value ?? 0);

        const allDurations = [
            boons1['beefer']?.duration, boons1['turtler']?.duration,
            boons2['beefer']?.duration, boons2['turtler']?.duration,
        ].filter((d): d is number => d !== undefined);
        const duration = allDurations.length > 0 ? Math.max(...allDurations) : undefined;

        const boonMaker: { name: 'beefer' | 'turtler'; value: number }[] = [];
        if (beeferValue > 0) boonMaker.push({ name: 'beefer', value: beeferValue });
        if (turtlerValue > 0) boonMaker.push({ name: 'turtler', value: turtlerValue });

        let slammerType: SlammerType = 'flipper';
        if (beeferValue > 0 && turtlerValue > 0) slammerType = 'beeferturtler';
        else if (beeferValue > 0) slammerType = 'beefer';
        else if (turtlerValue > 0) slammerType = 'turtler';

        const slamAbility = masterDemoSlammer({
            flips,
            boonMaker: boonMaker.length > 0 ? boonMaker : undefined,
            duration,
        });

        const descriptionParts = [`Flips ${flips} pogs.`];
        if (beeferValue > 0) descriptionParts.push(`${beeferValue} Beefer`);
        if (turtlerValue > 0) descriptionParts.push(`${turtlerValue} Turtler`);
        if (duration) descriptionParts.push(`for ${duration} turn(s).`);

        const newSlammer = new SlammerClass(
            `${slammer1.getName()} + ${slammer2.getName()}`,
            descriptionParts.join(' '),
            1,
            0,
            slamAbility,
            slammerType,
        );

        const equippedId = player.getEquippedSlammer()?.getId();
        player.removeSlammer(slammer1);
        player.removeSlammer(slammer2);
        player.addSlammer(newSlammer);

        if (equippedId === slammer1.getId() || equippedId === slammer2.getId()) {
            player.equipSlammer(newSlammer);
        }

        setIsForgeCompleted(true);
        adventure.setIsComplete(true);
        setIsComplete(true);
    }

    function makeLucky(selectedPog: PogClass) {
        selectedPog.setAbility("lucky");
        setIsLuckyCompleted(true);
        adventure.setIsComplete(true);
        setIsComplete(true);
    }

    if (template === 'campfire' && !isComplete) {
        
        return (
            <CampfireComponent adventure={adventure} handleRest={handleRest} hasRested={hasRested} />
        );
    } else if (template === 'campfire' && isComplete) {
        return (
            <p>Good fire!</p>
        );
    }

    if (template === 'chase' && !isComplete) {
        return (
            <ChaseComponent adventure={adventure} resolveChase={resolveChase} isChaseResolved={isChaseResolved} />
        );
    } else if (template === 'chase' && isComplete) {
        return (
            <p>You escaped, but took a hit!</p>
        );
    }

    if (template === 'chest' && !isComplete) {
        return (
            <ChestComponent adventure={adventure} openChest={openChest} isChestOpened={isChestOpened} />
        );
    } else if (template === 'chest' && isComplete) {
        return (
            <p>You opened it and got a pog!</p>
        );
    }

    if (template === 'trade' && !isComplete) {
        return (
            <TradeComponent adventure={adventure} trade={(selectedPog: PogClass) => trade(selectedPog)} isTradeCompleted={isTradeCompleted} player={player} tradePog={tradePog} />
        );
    } else if (template === 'trade' && isComplete) {
        return (
            <p>Good trade!</p>
        );
    }

    if (template === 'forge' && !isComplete) {
        return (
            <ForgeComponent adventure={adventure} forge={forge} isForgeCompleted={isForgeCompleted} player={player} />
        );
    } else if (template === 'forge' && isComplete) {
        return (
            <p>Good forge!</p>
        );
    }

    if (template === 'lucky' && !isComplete) {
        return (
            <LuckyComponent adventure={adventure} makeLucky={makeLucky} isLuckyCompleted={isLuckyCompleted} player={player} />
        );
    } else if (template === 'lucky' && isComplete) {
        return (
            <p>Lucky pog!</p>
        );
    }

    return <p>Unknown adventure template</p>;
}
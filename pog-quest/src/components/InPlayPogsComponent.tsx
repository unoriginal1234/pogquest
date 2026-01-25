import PogClass from "../classes/Pog";
import Pog from "./Pog";

export default function InPlayPogsComponent({ inPlayPogs }: { inPlayPogs: PogClass[] }) {
    return (
        <div>
            {inPlayPogs.map((pog) => (
                <Pog pog={pog} />
            ))}
        </div>
    );
}
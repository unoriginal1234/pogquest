import PogClass from "../classes/Pog";
import Pog from "./Pog";

export default function InPlayPogsComponent({ inPlayPogs }: { inPlayPogs: PogClass[] }) {
    return (
        <div>
            {inPlayPogs.map((pog) => (
                <div key={pog.getId()}>
                    <Pog pog={pog} />
                </div>
            ))}
        </div>
    );
}
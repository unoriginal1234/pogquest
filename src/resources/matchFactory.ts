import Match from "../classes/Match";
import Player from "../classes/Player";
import Baddie from "../classes/Baddie";

export default function matchFactory(player: Player, baddie: Baddie) {
    return new Match(player, baddie);
}
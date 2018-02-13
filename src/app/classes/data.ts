import {Player} from './player';
import {Weapon} from './weapon';
import {Round} from './round';

export class Data {
    players: Player[];
    weapons: Weapon[];
    rounds: Round[];
    maxRounds: number;
}

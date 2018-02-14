import {Injectable} from '@angular/core';
import {Round} from '../classes/round';
import {ROUNDS} from '../classes/mocks/round';
import * as _ from 'lodash';

@Injectable()
export class RoundService {
    rounds = ROUNDS;
    round = this.getRound();

    constructor() {
    }

    getRounds(): Round[] {
        return this.rounds;
    }

    getRound(): Round {
        return _.last(this.rounds);
    }

    refreshRound(): void {
        this.round = this.getRound();
    }

    weaponSelected(): boolean {
        return this.round.weapons[0] !== 0;
    }

    roundCompleted(): boolean {
        return _.every(this.round.weapons, (i) => i !== 0);
    }

    selectWeapon(weaponId): void {
        if (!this.roundCompleted()) {
            this.round.weapons[0] = weaponId;
        }
    }

    selectComputerWeapon(): void {
        if (this.weaponSelected()) {
            this.round.weapons[1] = _.random(1, 3);
        }
    }

    nextRound(): void {
        const nextRound = _.add(this.round.id, 1);
        this.rounds.push({
            id: nextRound,
            weapons: [0, 0]
        });
        this.refreshRound();
    }

    resetRounds(): void {
        this.rounds = [{
            id: 0,
            weapons: [0, 0]
        }];
        this.refreshRound();
    }

}

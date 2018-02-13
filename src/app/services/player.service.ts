import {Injectable} from '@angular/core';
import {Player} from '../classes/player';
import {PLAYERS} from '../classes/mocks/players';
import * as _ from 'lodash';

@Injectable()
export class PlayerService {
    players = PLAYERS;

    constructor() {
    }

    getPlayers(): Player[] {
        return this.players;
    }

    getPlayer(playerId: number): Player {
        return _.filter(this.players, {id: playerId})[0];
    }

    getName(playerId: number): string {
        const player = this.getPlayer(playerId);
        return player.name;
    }

    upScore(playerId: number): void {
        const player = this.getPlayer(playerId);
        player.score = player.score + 1;
    }

    allRoundsCompleted(maxRounds: number): boolean {
        return _.some(this.players, {score: maxRounds});
    }

    resetScore(): void {
        _.each(this.players, (p) => {
            p.score = 0;
        });
    }

}

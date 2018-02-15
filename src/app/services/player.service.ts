import {Injectable} from '@angular/core';
import {Player} from '../classes/player';
import {PLAYERS} from '../classes/mocks/players';
import * as _ from 'lodash';

@Injectable()
export class PlayerService {
    players = PLAYERS;
    uppedScore: number;

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
        this.uppedScore = player.id;
    }

    getUppedScore(): number {
        return this.uppedScore;
    }

    resetUppedScore(): void {
        this.uppedScore = 0;
    }

    resetScore(): void {
        _.each(this.players, (p) => {
            p.score = 0;
        });
        this.resetUppedScore();
    }

}

import {Injectable} from '@angular/core';
import {Game} from '../classes/game';
import {GAMES} from '../classes/mocks/games';
import * as _ from 'lodash';

@Injectable()
export class GameService {
    games = GAMES;
    game = this.getGame();

    constructor() {
    }

    getGames(): Game[] {
        return this.games;
    }

    getGame(): Game {
        return _.last(this.games);
    }

    refreshGame(): void {
        this.game = this.getGame();
    }

    isWeaponSelected(): boolean {
        return this.game.weapons[0] !== 0;
    }

    isGameOver(): boolean {
        return _.every(this.game.weapons, (i) => i !== 0);
    }

    onSelect(weaponId): void {
        if (!this.isGameOver()) {
            this.game.weapons[0] = weaponId;
        }
    }

    onFight(): void {
        if (this.isWeaponSelected()) {
            this.game.weapons[1] = _.random(1, 3);
        }
    }

    onPlayAgain(): void {
        const nextGame = _.add(this.game.id, 1);
        this.games.push({
            id: nextGame,
            weapons: [0, 0]
        });
        this.refreshGame();
    }

}

import {Injectable} from '@angular/core';
import {Data} from './classes/data';
import {Player} from './classes/player';
import {Weapon} from './classes/weapon';
import {Game} from './classes/game';
import {WeaponService} from './services/weapon.service';
import {PlayerService} from './services/player.service';
import {GameService} from './services/game.service';
import * as _ from 'lodash';

@Injectable()
export class AppService {
    DATA: Data;

    constructor(private playerService: PlayerService, private weaponService: WeaponService, private gameService: GameService) {
        this.DATA = {
            players: this.getPlayers(),
            weapons: this.getWeapons(),
            games: this.getGames()
        };
    }

    getData() {
        return this.DATA;
    }

    onPlay(): [any] {
        this.onFight();
        const gamePlayers = this.getData().players;
        const gameWeapons = this.getGame().weapons;
        const winnerWeapon = this.getWinnerWeapon(gameWeapons);
        if (!_.isNull(winnerWeapon)) {
            if (winnerWeapon.id === gameWeapons[0]) {
                this.upScore(gamePlayers[0].id);
                return [gamePlayers[0].id, `${this.getName(gamePlayers[0].id)} win!`];
            } else if (winnerWeapon.id === gameWeapons[1]) {
                this.upScore(gamePlayers[1].id);
                return [gamePlayers[1].id, `${this.getName(gamePlayers[1].id)} win!`];
            }
        }
        return [null, 'It\'s a tie'];
    }

    // WeaponService
    getWeapons(): Weapon[] {
        return this.weaponService.getWeapons();
    }

    getWeaponImage(weaponId, playerId): string {
        return this.weaponService.getWeaponImage(weaponId, playerId);
    }

    getWinnerWeapon(weapons: [number]): Weapon {
        return this.weaponService.getWinnerWeapon(weapons);
    }

    // GameService
    getGames(): Game[] {
        return this.gameService.getGames();
    }

    getGame(): Game {
        return this.gameService.getGame();
    }

    isGameOver(): boolean {
        return this.gameService.isGameOver();
    }

    isWeaponSelected(): boolean {
        return this.gameService.isWeaponSelected();
    }

    onSelect(weaponId): void {
        this.gameService.onSelect(weaponId);
    }

    onFight(): void {
        this.gameService.onFight();
    }

    onPlayAgain(): void {
        this.gameService.onPlayAgain();
    }

    // PlayerService
    getPlayers(): Player[] {
        return this.playerService.getPlayers();
    }

    getName(playerId: number): string {
        return this.playerService.getName(playerId);
    }

    upScore(playerId: number): void {
        this.playerService.upScore(playerId);
    }

}

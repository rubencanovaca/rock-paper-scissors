import {Injectable} from '@angular/core';
import {ResourceProvider} from 'angular2-resource-preloader';
import {Data} from './classes/data';
import {Player} from './classes/player';
import {Weapon} from './classes/weapon';
import {Round} from './classes/round';
import {WeaponService} from './services/weapon.service';
import {PlayerService} from './services/player.service';
import {RoundService} from './services/round.service';
import * as _ from 'lodash';

@Injectable()
export class AppService {
    DATA: Data;

    constructor(
        private playerService: PlayerService,
        private weaponService: WeaponService,
        private roundService: RoundService,
        private resourceProvider: ResourceProvider
    ) {
        this.DATA = {
            players: this.getPlayers(),
            weapons: this.getWeapons(),
            rounds: this.getRounds(),
            maxRounds: 0
        };
    }

    getData() {
        return this.DATA;
    }

    fight(): [any] {
        this.selectComputerWeapon();
        const roundPlayers = this.getData().players;
        const roundWeapons = this.getRound().weapons;
        const winnerWeapon = this.getWinnerWeapon(roundWeapons);
        if (!_.isNull(winnerWeapon)) {
            if (winnerWeapon.id === roundWeapons[0]) {
                this.upScore(roundPlayers[0].id);
                return [roundPlayers[0].id, `${this.getName(roundPlayers[0].id)} win!`];
            } else if (winnerWeapon.id === roundWeapons[1]) {
                this.upScore(roundPlayers[1].id);
                return [roundPlayers[1].id, `${this.getName(roundPlayers[1].id)} win!`];
            }
        }
        return [null, 'It\'s a tie'];
    }

    allRoundsCompleted(): boolean {
        const players = this.DATA.players;
        const rounds = this.DATA.rounds;
        const maxRounds = this.DATA.maxRounds;
        return players[0].score + players[1].score === maxRounds || (rounds.length === maxRounds && players[0].score !== players[1].score);
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

    // WeaponService
    getWeapons(): Weapon[] {
        return this.weaponService.getWeapons();
    }

    getWeaponImgSrc(weaponName: string, playerId: number): string {
        return this.weaponService.getWeaponImgSrc(weaponName, playerId);
    }

    getWeaponImage(weaponId: number, playerId: number): string {
        return this.weaponService.getWeaponImage(weaponId, playerId);
    }

    getWinnerWeapon(weapons: [number]): Weapon {
        return this.weaponService.getWinnerWeapon(weapons);
    }

    // RoundService
    getRounds(): Round[] {
        return this.roundService.getRounds();
    }

    getRound(): Round {
        return this.roundService.getRound();
    }

    roundCompleted(): boolean {
        return this.roundService.roundCompleted();
    }

    weaponSelected(): boolean {
        return this.roundService.weaponSelected();
    }

    selectWeapon(weaponId): void {
        this.roundService.selectWeapon(weaponId);
    }

    selectComputerWeapon(): void {
        this.roundService.selectComputerWeapon();
    }

    nextRound(): void {
        this.roundService.nextRound();
    }

    playAgain(): void {
        this.roundService.resetRounds();
        this.DATA.rounds = this.roundService.getRounds();
        this.playerService.resetScore();
    }

    // Preload
    preloadImages(): void {
        const images = [];
        _.each(this.DATA.players, (player) => {
            images.push(this.getWeaponImgSrc('', player.id));
            _.each(this.DATA.weapons, (weapon) => {
                images.push(this.getWeaponImgSrc(weapon.name, player.id));
            });
        });
        _.each(images, (image) => {
            this.resourceProvider.getImage(image).subscribe((img: HTMLImageElement) => {
                console.log('loaded image from: ' + img.src);
            });
        });
    }
}

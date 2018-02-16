import {Component, OnInit, Input} from '@angular/core';
import {Data} from '../../classes/data';
import {Player} from '../../classes/player';
import {Weapon} from '../../classes/weapon';
import {Round} from '../../classes/round';
import {AppService} from '../../app.service';

@Component({
    selector: 'app-combat',
    templateUrl: './combat.component.html',
    styleUrls: ['./combat.component.scss']
})
export class CombatComponent implements OnInit {
    @Input() data: Data;
    players: Player[];
    weapons: Weapon[];
    result: [any];
    prevWeapons = [0, 0];

    constructor(private appService: AppService) {
    }

    ngOnInit() {
        this.players = this.data.players;
        this.weapons = this.data.weapons;
    }

    getRound(): Round {
        return this.appService.getRound();
    }

    getRounds(): Round[] {
        return this.appService.getRounds();
    }

    changedWeapon(playerIndex: number): boolean {
        return this.prevWeapons[playerIndex] !== this.getRound().weapons[playerIndex];
    }

    getWeaponImage(weaponId: number, playerId: number): string {
        return this.appService.getWeaponImage(weaponId, playerId);
    }

    weaponSelected(): boolean {
        return this.appService.weaponSelected();
    }

    roundCompleted(): boolean {
        return this.appService.roundCompleted();
    }

    fight(): void {
        this.result = this.appService.fight();
    }

    nextRound(): void {
        this.appService.nextRound();
    }

    getResultType(): string {
        const playerWinnerId = this.result[0];
        if (playerWinnerId) {
            const players = this.appService.getPlayers();
            if (players[0].id === playerWinnerId) {
                return 'win';
            } else if (players[1].id === playerWinnerId) {
                return 'lose';
            }
        }
        return 'tie';
    }

    getResultText(): string {
        return this.result[1];
    }

    allRoundsCompleted(): boolean {
        return this.appService.allRoundsCompleted();
    }

    getFinalResultType(): string {
        const playerWinnerId = this.appService.getFinalResult()[0];
        const players = this.appService.getPlayers();
        if (players[0].id === playerWinnerId) {
            return 'win';
        }
        return 'lose';
    }

    getFinalResultText(): string {
        return this.appService.getFinalResult()[1];
    }

    playAgain(): void {
        this.appService.playAgain();
    }

}

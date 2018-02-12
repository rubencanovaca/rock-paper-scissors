import {Component, OnInit, Input} from '@angular/core';
import {Data} from '../../classes/data';
import {Player} from '../../classes/player';
import {Weapon} from '../../classes/weapon';
import {Game} from '../../classes/game';
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

    constructor(private appService: AppService) {
    }

    ngOnInit() {
        this.players = this.data.players;
        this.weapons = this.data.weapons;
    }

    getGame(): Game {
        return this.appService.getGame();
    }

    getWeaponImage(weaponId, playerId): string {
        return this.appService.getWeaponImage(weaponId, playerId);
    }

    isWeaponSelected(): boolean {
        return this.appService.isWeaponSelected();
    }

    isGameOver(): boolean {
        return this.appService.isGameOver();
    }

    onPlay(): void {
        this.result = this.appService.onPlay();
    }

    onPlayAgain(): void {
        this.appService.onPlayAgain();
    }

    getResultType(): string {
        const playerWinner = this.result[0];
        switch (playerWinner) {
            case 0:
                return 'win';
            case 1:
                return 'lose';
        }
        return 'tie';
    }

    getResultText(): string {
        return this.result[1];
    }

}

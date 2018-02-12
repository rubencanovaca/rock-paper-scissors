import {Component, OnInit, Input} from '@angular/core';
import {Data} from '../../classes/data';
import {Player} from '../../classes/player';
import {Weapon} from '../../classes/weapon';
import {Game} from '../../classes/game';
import {AppService} from '../../app.service';

@Component({
    selector: 'app-weapons',
    templateUrl: './weapons.component.html',
    styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent implements OnInit {
    @Input() data: Data;
    players: Player[];
    weapons: Weapon[];

    constructor(private appService: AppService) {
    }

    ngOnInit() {
        this.players = this.data.players;
        this.weapons = this.data.weapons;
    }

    getGame(): Game {
        return this.appService.getGame();
    }

    isGameOver(): boolean {
        return this.appService.isGameOver();
    }

    onSelect(weaponId): void {
        this.appService.onSelect(weaponId);
    }

    getWeaponImage(weaponId, playerId): string {
        return this.appService.getWeaponImage(weaponId, playerId);
    }

}

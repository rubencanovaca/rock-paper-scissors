import {Component, OnInit, Input} from '@angular/core';
import {Player} from '../../classes/player';
import {Weapon} from '../../classes/weapon';
import {WEAPONS} from '../../mocks/weapons';
import * as _ from 'lodash';

@Component({
    selector: 'app-combat',
    templateUrl: './combat.component.html',
    styleUrls: ['./combat.component.css']
})

export class CombatComponent implements OnInit {
    @Input() players: Player;
    weapons = WEAPONS;
    imgUrl = '../../../assets/images';
    game = {
        ready: false,
        countdown: 3,
        computerChoice: 0,
        winner: 0,
        over: false
    };

    getImage = function(weapon: Weapon, player: Player) {
        return `<img class="img-fluid" src="${this.imgUrl}/${weapon.name.toLowerCase()}_player${player.id}.png" alt="${weapon.name}" />`;
    };

    isWeaponSelected() {
        return _.filter(this.weapons, 'selected').length > 0;
    }

    onSelect(weapon: Weapon): void {
        if (!this.game.over) {
            _.each(this.weapons, (w) => {
                w.selected = false;
            });
            weapon.selected = true;
            this.game.ready = true;
        }
    }

    onFight() {
        this.game.computerChoice = 1;
        this.game.over = true;
    }

    onPlayAgain() {
        this.game.ready = false;
        this.game.computerChoice = 0;
        this.game.winner = 0;
        this.game.over = false;
        _.each(this.weapons, (w) => {
            w.selected = false;
        });
    }

    constructor() {
    }

    ngOnInit() {
    }

}

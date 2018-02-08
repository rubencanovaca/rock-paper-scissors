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

    getImage = function(weapon: Weapon, player: Player) {
        return `<img src="../../../assets/images/${weapon.name.toLowerCase()}_player${player.id}.png" alt="${weapon.name}" />`;
    };

    onSelect(weapon: Weapon): void {
        _.each(this.weapons, (w) => { w.selected = false; });
        weapon.selected = true;
    }

    constructor() {
    }

    ngOnInit() {
    }

}

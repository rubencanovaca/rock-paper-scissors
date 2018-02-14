import {Injectable} from '@angular/core';
import {Weapon} from '../classes/weapon';
import {WEAPONS} from '../classes/mocks/weapons';
import * as _ from 'lodash';

@Injectable()
export class WeaponService {
    weapons = WEAPONS;
    imgUrl = '../../../assets/images';

    constructor() {
    }

    getWeapons(): Weapon[] {
        return this.weapons;
    }

    getWeapon(weaponId: Number): Weapon {
        return _.filter(this.weapons, {id: weaponId})[0];
    }

    getWeaponImgSrc(weaponName, playerId): string {
        return `${this.imgUrl}/${weaponName.toLowerCase()}_player${playerId}.png`;
    }

    getWeaponImage(weaponId, playerId): string {
        const weapon = this.getWeapon(weaponId);
        const weaponName = weapon ? weapon.name : '';
        return `<img class="img-fluid" src="${this.getWeaponImgSrc(weaponName, playerId)}" alt="${weaponName}" />`;
    }

    getWinnerWeapon(weapons: [number]): Weapon {
        const w1 = _.filter(this.weapons, {id: weapons[0]})[0];
        const w2 = _.filter(this.weapons, {id: weapons[1]})[0];
        if (w1.wins === w2.id) {
            return w1;
        } else if (w2.wins === w1.id) {
            return w2;
        }
        return null;
    }

}

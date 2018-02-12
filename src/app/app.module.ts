import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppService} from './app.service';
import {PlayerService} from './services/player.service';
import {WeaponService} from './services/weapon.service';
import {GameService} from './services/game.service';

import {AppComponent} from './components/app.component';
import {WeaponsComponent} from './components/weapons/weapons.component';
import {CombatComponent} from './components/combat/combat.component';
import {HistoryComponent} from './components/history/history.component';

@NgModule({
    declarations: [
        AppComponent,
        WeaponsComponent,
        CombatComponent,
        HistoryComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        AppService,
        PlayerService,
        WeaponService,
        GameService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

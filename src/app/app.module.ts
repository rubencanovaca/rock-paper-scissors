import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppService} from './app.service';
import {PlayerService} from './services/player.service';
import {WeaponService} from './services/weapon.service';
import {RoundService} from './services/round.service';

import {AppComponent} from './app.component';
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
        BrowserModule,
        FormsModule
    ],
    providers: [
        AppService,
        PlayerService,
        WeaponService,
        RoundService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

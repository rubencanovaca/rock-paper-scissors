import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app.component';
import {HistoryComponent} from './components/history/history.component';
import {CombatComponent} from './components/combat/combat.component';

@NgModule({
    declarations: [
        AppComponent,
        HistoryComponent,
        CombatComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

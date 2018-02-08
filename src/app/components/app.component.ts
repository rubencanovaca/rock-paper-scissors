import {Component} from '@angular/core';
import {Player} from '../classes/player';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Rock Paper Scissors';
    players: Player[] = [{
        id: 1,
        name: 'You',
        score: 0
    }, {
        id: 2,
        name: 'Computer',
        score: 0
    }];
}

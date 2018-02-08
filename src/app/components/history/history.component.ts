import {Component, OnInit, Input} from '@angular/core';
import {Player} from '../../classes/player';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
    @Input() players: Player;

    constructor() {
    }

    ngOnInit() {
    }

}

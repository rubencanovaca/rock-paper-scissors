import {Component, OnInit, Input} from '@angular/core';
import {Data} from '../../classes/data';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
    @Input() data: Data;

    constructor() {
    }

    ngOnInit() {
    }

}

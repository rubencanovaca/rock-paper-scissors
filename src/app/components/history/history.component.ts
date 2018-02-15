import {Component, OnInit, Input} from '@angular/core';
import {Data} from '../../classes/data';
import {AppService} from '../../app.service';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
    selector: 'app-history',
    templateUrl: './history.component.html',
    styleUrls: ['./history.component.scss'],
    animations: [
        trigger('uppedScore', [
            state('normal', style({
                transform: 'scale(1)'
            })),
            state('upped', style({
                transform: 'scale(1.6)'
            })),
            transition('normal => upped', animate('100ms ease-in')),
            transition('upped => normal', animate('10ms ease-out'))
        ]),
        trigger('winner', [
            state('normal', style({
                color: 'inherit'
            })),
            state('winner', style({
                color: 'green',
            })),
            transition('normal => winner', animate('100ms ease-in')),
            transition('winner => normal', animate('10ms ease-out'))
        ])
    ]
})
export class HistoryComponent implements OnInit {
    @Input() data: Data;

    constructor(private appService: AppService) {
        this.data = this.appService.getData();
    }

    ngOnInit() {
    }

    uppedScore(playerId: number): boolean {
        return this.appService.getUppedScore() === playerId;
    }

}

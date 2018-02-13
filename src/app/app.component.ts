import {Component} from '@angular/core';
import {Data} from './classes/data';
import {AppService} from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    data: Data;
    title = 'Rock Paper Scissors';
    owner = 'Rubén Canovaca Nieto';
    email = 'rubencanovaca@gmail.com';
    rounds = [1, 3, 5];
    selectedRounds: number;
    submitted = false;

    constructor(private appService: AppService) {
        this.data = appService.getData();
        this.selectedRounds = this.rounds[1];
    }

    roundCompleted(): boolean {
        return this.appService.roundCompleted();
    }

    onSubmit() {
        this.submitted = true;
        this.data.maxRounds = this.selectedRounds;
    }
}

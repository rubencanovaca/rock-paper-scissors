import {Component} from '@angular/core';
import {Data} from '../classes/data';
import {AppService} from '../app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Rock Paper Scissors';
    owner = 'Rubén Canovaca Nieto';
    email = 'rubencanovaca@gmail.com';
    data: Data;

    constructor(private appService: AppService) {
        this.data = appService.getData();
    }
}

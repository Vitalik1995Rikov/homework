import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../app.component';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   

    @Input() card: Card;
    @Input() index: number;
    
     // title: string = 'My Card Title';
    // text: string = 'My sample text';

    textColor: string = 'black';

    ngOnInit() {}

    changeTitle() {
        this.card.title = 'This title has been changed'
    }

    // inputHandler(value: any) {
    //     this.title = value;
    // }

    changeHandler() {
        console.log(this.card.title);
    }
}
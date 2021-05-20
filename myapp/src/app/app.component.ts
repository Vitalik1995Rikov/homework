import { Component } from '@angular/core';

export interface Card {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  
  toggle = true;

  cards: Card[] = [
    {title: 'Card1', text: 'This is card number 1'},
    {title: 'Card2', text: 'This is card number 2'},
    {title: 'Card3', text: 'This is card number 3'},
    {title: 'Card4', text: 'This is card number 4'}
  ];
  
  toggleCards() {
    this.toggle = !this.toggle;
  }
}

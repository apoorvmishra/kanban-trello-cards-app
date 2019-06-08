import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html',
  styleUrls: ['./app-card.component.css']
})
export class AppCardComponent implements OnInit {

  @Input() cards: String[];
  @Input() header: String;
  @Input() headerColor;

  constructor() { }

  ngOnInit() {}

  addCard() {
    var detail = prompt("Enter a skill to add: ", "");
    if(this.cards.includes(detail)){
      alert("Skill is already present!");
    } else {
      this.cards.push(detail);
    }
  }
  removeCard(event, card) {
    var index: number = this.cards.indexOf(card);
    if(index !== -1){
      this.cards.splice(index, 1);
    }
  }
}

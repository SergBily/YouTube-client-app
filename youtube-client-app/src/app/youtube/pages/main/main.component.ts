import { Component, OnInit } from '@angular/core';
import CardsService from 'src/app/core/services/data/cards.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class MainComponent implements OnInit {
  constructor(public cardsService: CardsService) { }

  ngOnInit(): void {

  }
}

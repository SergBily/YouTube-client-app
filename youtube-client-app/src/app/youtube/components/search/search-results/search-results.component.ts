import { Component, OnInit } from '@angular/core';
import CardsService from 'src/app/core/services/cards.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnInit {
  constructor(public cardsService: CardsService) {}

  ngOnInit(): void {

  }
}

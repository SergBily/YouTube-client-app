import { Component, OnInit } from '@angular/core';
import CardsService from 'src/app/core/services/data/cards.service';
import ToggleSortService from 'src/app/core/services/filter/toggle-sort.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnInit {
  constructor(public cardsService: CardsService, public toggleSortService: ToggleSortService) {
  }

  ngOnInit(): void {

  }
}

import { Component } from '@angular/core';
import CardsService from 'src/app/core/services/cards.service';
import ItemResponse from 'src/app/models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent {
  cards!: ItemResponse[];

  constructor(private cardsService: CardsService) {
    this.cards = this.cardsService.getCards().items;
  }
}

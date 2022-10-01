import { Component } from '@angular/core';
import CardsService from 'src/app/core/services/cards.service';
import ItemResponse from 'src/app/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent {
  card!: ItemResponse;

  constructor(private cardsService: CardsService) {
    [this.card] = this.cardsService.getCards().items;
  }
}

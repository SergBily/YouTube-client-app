import { Injectable } from '@angular/core';
import ItemResponse from 'src/app/shared/models/search-item.model';
import SearchResponse from 'src/app/shared/models/search-response.model';
import mocksData from '../../../../mocks/card.mock.json';

@Injectable({
  providedIn: 'root',
})
export default class ApiService {
  searchResult!: SearchResponse;

  cards!: ItemResponse[];

  constructor() {
  }

  public getCards(): void {
    this.searchResult = mocksData;
    this.cards = this.searchResult.items;
  }

  public getSelectedCard(id: string): ItemResponse {
    this.searchResult = mocksData;
    return this.searchResult.items.find((card) => card.etag === id) as ItemResponse;
  }
}

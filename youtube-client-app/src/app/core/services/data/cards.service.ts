import { Injectable } from '@angular/core';
import SearchResponse from 'src/app/shared/models/search-response.model';
import mocksData from '../../../../mocks/card.mock.json';

@Injectable({
  providedIn: 'root',
})
export default class CardsService {
  searchResult!: SearchResponse;

  constructor() {}

  getCards() {
    this.searchResult = mocksData;
  }
}

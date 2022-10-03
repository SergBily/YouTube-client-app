import { Injectable } from '@angular/core';
import SearchResponse from 'src/app/models/search-response.model';
import mocksData from '../../../mocks/card.mock.json';

@Injectable({
  providedIn: 'root',
})
export default class CardsService {
  searchResult!: SearchResponse;

  searchValue!: string;

  getCards() {
    this.searchResult = mocksData;
  }
}

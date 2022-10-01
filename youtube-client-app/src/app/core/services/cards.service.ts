import { Injectable } from '@angular/core';
import mocksData from '../../../mocks/card.mock.json';

@Injectable({
  providedIn: 'root',
})
export default class CardsService {
  getCards() {
    console.log(typeof mocksData);

    return mocksData;
  }
}

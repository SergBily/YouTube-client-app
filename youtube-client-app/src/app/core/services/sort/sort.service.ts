import { Injectable } from '@angular/core';
import KindEnum from 'src/app/shared/models/filter.enum';
import ApiService from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export default class SortService {
  constructor(private api: ApiService) { }

  public sort(kindOfSort: string): void {
    switch (kindOfSort) {
      case KindEnum.dataUp:
        this.api.cards = this.api.cards.sort(
          (a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt),
        );
        break;
      case KindEnum.dataDown:
        this.api.cards = this.api.cards.sort(
          (a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt),
        );
        break;
      case KindEnum.countUp:
        this.api.cards = this.api.cards.sort(
          (a, b) => +b.statistics.viewCount - +a.statistics.viewCount,
        );
        break;
      case KindEnum.countDown:
        this.api.cards = this.api.cards.sort(
          (a, b) => +a.statistics.viewCount - +b.statistics.viewCount,
        );
        break;
      default:
        break;
    }
  }
}

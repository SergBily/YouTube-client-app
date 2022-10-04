import { Pipe, PipeTransform } from '@angular/core';
import KindEnum from 'src/app/shared/models/filter.enum';
import ItemResponse from 'src/app/shared/models/search-item.model';

@Pipe({
  name: 'filters',
})
export default class FiltersPipe implements PipeTransform {
  transform(cards: ItemResponse[], extension: string): ItemResponse[] {
    if (!extension) return cards;
    switch (extension) {
      case KindEnum.dataUp:
        return cards.sort(
          (a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt),
        );
        break;
      case KindEnum.dataDown:
        return cards.sort(
          (a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt),
        );
        break;
      case KindEnum.countUp:
        return cards.sort(
          (a, b) => +b.statistics.viewCount - +a.statistics.viewCount,
        );
        break;
      case KindEnum.countDown:
        return cards.sort(
          (a, b) => +a.statistics.viewCount - +b.statistics.viewCount,
        );
        break;
      default:
        return cards.filter(
          (card) => card.snippet.title.toLowerCase().indexOf(extension.toLowerCase()) !== -1,
        );
        break;
    }
  }
}

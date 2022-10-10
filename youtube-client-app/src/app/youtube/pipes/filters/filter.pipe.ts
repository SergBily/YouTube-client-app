import { Pipe, PipeTransform } from '@angular/core';
import ItemResponse from 'src/app/shared/models/search-item.model';

@Pipe({
  name: 'filter',
  pure: false,
})
export default class FilterPipe implements PipeTransform {
  transform(cards: ItemResponse[], searchTag: string): ItemResponse[] {
    if (!searchTag) return cards;

    return cards.filter(
      (card) => card.snippet.tags.filter((tag) => tag.includes(searchTag.toLowerCase()))
        .length !== 0,
    );
  }
}

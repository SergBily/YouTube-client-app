import {
  animate, state, style, transition, trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import CardsService from 'src/app/core/services/data/cards.service';
import ToggleSortService from 'src/app/core/services/filter/toggle-sort.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
  animations: [
    trigger('openCards', [
      state('void', style({ transform: 'translateY(100%)' })),
      transition(':enter, :leave', [
        animate('0.3s'),
      ]),
    ]),
  ],
})
export default class SearchItemComponent implements OnInit {
  constructor(public cardsService: CardsService, public toggleSortService: ToggleSortService) { }

  ngOnInit(): void {

  }
}

import {
  animate, state, style, transition, trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import ApiService from 'src/app/core/services/api/api.service';
import FilterService from 'src/app/core/services/filter/filter.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  animations: [
    trigger('openCards', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate('0.3s'),
      ]),
    ]),
  ],
})
export default class SearchResultsComponent implements OnInit {
  constructor(
    public api: ApiService,
    public filter: FilterService,
  ) { }

  ngOnInit(): void {

  }
}

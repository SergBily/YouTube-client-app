import {
  animate, state, style, transition, trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import ToggleSortService from '../../services/filter/toggle-sort.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  animations: [
    trigger('openSettings', [
      state('void', style({ height: 0 })),
      transition(':enter, :leave', [
        animate('0.3s'),
      ]),
    ]),
  ],
})
export default class FilterComponent implements OnInit {
  isArrowData = false;

  isArrowCount = false;

  openSortData = false;

  openSortCount = false;

  searhOfWord = '';

  constructor(public toggleSortService: ToggleSortService) { }

  ngOnInit(): void {

  }
}

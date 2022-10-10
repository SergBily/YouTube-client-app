import {
  animate, state, style, transition, trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import FilterService from '../../services/filter/filter.service';
import SortService from '../../services/sort/sort.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  animations: [
    trigger('openSettings', [
      state('void', style({ height: 0 })),
      transition(':enter, :leave', [
        animate('0.3s'),
      ]),
    ]),
  ],
})
export default class SortComponent implements OnInit {
  isArrowData = false;

  isArrowCount = false;

  isOpenSortData = false;

  isOpenSortCount = false;

  constructor(public sortService: SortService, public filter: FilterService) { }

  ngOnInit(): void {

  }

  protected sortingControl(kindOfSorting: string): void {
    switch (kindOfSorting) {
      case 'data':
        this.isArrowData = !this.isArrowData;
        this.isOpenSortData = true;
        this.isOpenSortCount = false;
        this.isArrowCount = false;
        this.sortService.sort(this.isArrowData ? 'dataUp' : 'dataDown');
        break;

      default:
        this.isArrowCount = !this.isArrowCount;
        this.isOpenSortCount = true;
        this.isOpenSortData = false;
        this.isArrowData = false;
        this.sortService.sort(this.isArrowCount ? 'countUp' : 'countDown');
        break;
    }
  }
}

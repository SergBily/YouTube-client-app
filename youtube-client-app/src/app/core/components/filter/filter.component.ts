import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export default class FilterComponent {
  isArrowData = false;

  isArrowCount = false;

  openSortData = false;

  openSortCount = false;

  searhOfWord = '';
}

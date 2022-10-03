import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export default class FilterComponent implements OnInit {
  isArrowData = false;

  isArrowCount = false;

  openSortData = false;

  openSortCount = false;

  searhOfWord = '';

  constructor() { }

  ngOnInit(): void {

  }
}

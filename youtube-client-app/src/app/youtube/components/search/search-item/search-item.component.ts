import { Component, OnInit } from '@angular/core';
import ItemResponse from 'src/app/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent implements OnInit {
  itemResult!: ItemResponse;

  constructor() { }

  ngOnInit(): void {

  }
}

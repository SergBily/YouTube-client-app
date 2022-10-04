import { Component, OnInit, Input } from '@angular/core';
import ItemResponse from 'src/app/shared/models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export default class SearchItemComponent implements OnInit {
  @Input() card!: ItemResponse;

  constructor() { }

  ngOnInit(): void {

  }
}

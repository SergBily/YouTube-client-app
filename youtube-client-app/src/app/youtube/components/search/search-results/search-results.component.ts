import { Component, OnInit } from '@angular/core';
import SearchResponse from 'src/app/models/search-response.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnInit {
  searhResult!: SearchResponse;

  constructor() { }

  ngOnInit(): void {

  }
}

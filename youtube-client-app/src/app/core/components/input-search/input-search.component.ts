import {
  Component, OnInit,
} from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],

})
export default class InputSearchComponent implements OnInit {
  value = '';

  constructor() { }

  ngOnInit(): void {

  }
}

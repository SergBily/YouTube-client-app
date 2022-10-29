import {
  Component, OnInit,
} from '@angular/core';
import ApiService from '../../services/api/api.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],

})
export default class InputSearchComponent implements OnInit {
  value!: string;

  constructor(private api: ApiService) { }

  ngOnInit(): void {}

  protected clearSearch(): void {
    this.value = '';
  }

  protected getResult(): void {
    if (this.value.trim()) {
      this.api.getCards();
      this.clearSearch();
    }
  }
}

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

  isEmptyString = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

  }

  protected getResult(value: string): void {
    this.isEmptyString = value.trim() ? !this.isEmptyString : this.isEmptyString;

    if (!this.isEmptyString) {
      this.api.getCards(this.value);
      this.value = '';
    }
  }
}

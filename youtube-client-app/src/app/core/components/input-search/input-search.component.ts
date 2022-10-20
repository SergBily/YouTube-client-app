import {
  AfterViewInit,
  Component, ElementRef, OnInit, ViewChild,
} from '@angular/core';
import {
  debounceTime, distinctUntilChanged, filter, fromEvent, map, mergeMap,
} from 'rxjs';
import ApiService from '../../services/api/api.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],

})
export default class InputSearchComponent implements OnInit, AfterViewInit {
  @ViewChild('search') inputSearch!: ElementRef;

  value!: string;

  isEmptyString = true;

  constructor(private api: ApiService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const inputElement = this.inputSearch.nativeElement;

    fromEvent<InputEvent>(inputElement, 'input')
      .pipe(
        map((event) => (event.target as HTMLInputElement).value),
        filter((value) => value.length >= 3),
        debounceTime(800),
        distinctUntilChanged(),
        mergeMap(async (query) => this.api.getCards(query)),
      )
      .subscribe();
  }

  protected getResult(value: string): void {
    this.isEmptyString = value.trim() ? !this.isEmptyString : this.isEmptyString;

    if (!this.isEmptyString) {
      this.api.getCards(this.value);
      this.value = '';
    }
  }
}

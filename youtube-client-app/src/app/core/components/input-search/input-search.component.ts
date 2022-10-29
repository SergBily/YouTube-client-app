import {
  AfterViewInit,
  Component, ElementRef, OnInit, Renderer2, ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  debounceTime, distinctUntilChanged, filter,
  fromEvent, map, mergeMap, Subscription, tap,
} from 'rxjs';
import AuthStateService from 'src/app/authorization/services/login/auth-state.service';
import ApiService from '../../services/api/api.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],

})
export default class InputSearchComponent implements OnInit, AfterViewInit {
  @ViewChild('search') inputSearch!: ElementRef;

  inputSubscribe!: Subscription;

  constructor(
    private api: ApiService,
    private router: Router,
    public stateAuth: AuthStateService,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {}

  protected clearSearch(): void {
    this.renderer.setProperty(this.inputSearch.nativeElement, 'value', '');
  }

  ngAfterViewInit(): void {
    const inputElement = this.inputSearch.nativeElement;

    this.inputSubscribe = fromEvent<InputEvent>(inputElement, 'input')
      .pipe(
        map((event) => (event.target as HTMLInputElement).value),
        filter((value) => value.length >= 3),
        debounceTime(800),
        distinctUntilChanged(),
        tap((query) => {
          this.router.navigate(['/youtube/main/search'], { queryParams: { req: query } });
          this.api.searchCurValue = query;
          localStorage.setItem('currentQuery', `${query}`);
        }),
        mergeMap(async (query) => this.api.getCards(query)),
      )
      .subscribe();
  }
}

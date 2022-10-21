import {
  AfterViewInit,
  Component, ElementRef, OnInit, ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  debounceTime, distinctUntilChanged, filter, fromEvent, map, mergeMap, tap,
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

  constructor(
    private api: ApiService,
    private router: Router,
    private stateAuth: AuthStateService,
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const inputElement = this.inputSearch.nativeElement;
    let stateAuth: boolean;
    this.stateAuth.getStateChanged().subscribe((state) => { stateAuth = state; });

    fromEvent<InputEvent>(inputElement, 'input')
      .pipe(
        map((event) => (event.target as HTMLInputElement).value),
        filter((value) => value.length >= 3 && stateAuth),
        debounceTime(800),
        distinctUntilChanged(),
        tap((query) => {
          this.router.navigate(['/youtube/main/search'], { queryParams: { req: query } });
          this.api.searchCurValue = query;
        }),
        mergeMap(async (query) => this.api.getCards(query)),
      )
      .subscribe();
  }
}

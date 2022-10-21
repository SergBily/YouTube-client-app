import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnDestroy } from '@angular/core';
import { AppConfig, APP_CONFIG } from 'src/app/shared/config/app.config';
import {
  map, mergeMap, Observable, Subscription,
} from 'rxjs';
import ItemResponse from 'src/app/shared/models/search-item.model';
import SearchResponse from 'src/app/shared/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export default class ApiService implements OnDestroy {
  searchResult!: SearchResponse;

  cards!: ItemResponse[];

  searchCurValue!: string;

  curVideo!: Observable<ItemResponse>;

  subscribe!: Subscription;

  constructor(@Inject(APP_CONFIG) private appConfig: AppConfig, private http: HttpClient) {
  }

  public getCards(request: string): void {
    const req = this.http.get<SearchResponse>(
      `${this.appConfig.baseUrl}/search`,
      {
        params: {
          key: this.appConfig.apiKey,
          type: 'video',
          part: 'snippet',
          maxResults: '16',
          q: request,
        },
      },
    )
      .pipe(
        map((res) => res.items.map((video) => video.id.videoId)),
        mergeMap(
          (idVideo) => this.http.get<SearchResponse>(
            `${this.appConfig.baseUrl}/videos`,
            {
              params: {
                key: this.appConfig.apiKey,
                id: idVideo,
                part: 'snippet,statistics',
              },
            },
          ),
        ),
      );

    this.subscribe = req.subscribe((res: any) => {
      this.cards = res.items;
    });
  }

  public getSelectedCard(id: string): Observable<ItemResponse> {
    return this.http.get<SearchResponse>(
      `${this.appConfig.baseUrl}/videos`,
      {
        params: {
          key: this.appConfig.apiKey,
          id,
          part: 'snippet,statistics',
        },
      },
    ).pipe(
      map((video) => video.items[0]),
    );
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }
}

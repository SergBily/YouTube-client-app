import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ApiService from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class MainComponent implements OnInit {
  constructor(public api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const curQuery: string = this.route.snapshot.queryParams['req'];

    if (!this.api.cards && curQuery) {
      this.api.getCards(curQuery);
    }
  }
}

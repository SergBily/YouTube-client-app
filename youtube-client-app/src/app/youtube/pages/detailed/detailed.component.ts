import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import ApiService from 'src/app/core/services/api/api.service';
import ItemResponse from 'src/app/shared/models/search-item.model';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
})
export default class DetailedComponent implements OnInit {
  selectedCard$!: Observable<ItemResponse>;

  constructor(private route: ActivatedRoute, public api: ApiService) { }

  ngOnInit(): void {
    const selectedCardId: string = this.route.snapshot.queryParams['id'];
    this.selectedCard$ = this.api.getSelectedCard(selectedCardId);
  }
}

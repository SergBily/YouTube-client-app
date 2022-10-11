import { Component, OnInit, Input } from '@angular/core';
import ItemResponse from 'src/app/shared/models/search-item.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export default class StatisticsComponent implements OnInit {
  @Input() card!: ItemResponse;

  constructor() { }

  ngOnInit(): void {
  }
}

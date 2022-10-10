import { Component, OnInit } from '@angular/core';
import ApiService from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export default class MainComponent implements OnInit {
  constructor(public api: ApiService) { }

  ngOnInit(): void {

  }
}

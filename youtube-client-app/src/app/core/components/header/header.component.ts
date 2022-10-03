import { Component, OnInit } from '@angular/core';
import CardsService from '../../services/cards.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  loginName = 'Your Name';

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {

  }
}

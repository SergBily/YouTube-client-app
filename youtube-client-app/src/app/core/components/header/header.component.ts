import {
  Component, OnInit,
} from '@angular/core';
import CardsService from '../../services/cards.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  loginName = 'Your Name';

  toggleSettings = false;

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {

  }

  getResult(value: string): void {
    this.cardsService.getCards();
    this.cardsService.searchValue = value;
  }
}

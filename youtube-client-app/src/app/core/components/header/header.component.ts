import {
  Component, OnInit,
} from '@angular/core';
import CardsService from '../../services/data/cards.service';

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

  getResult(): void {
    this.cardsService.getCards();
  }
}

import { Component } from '@angular/core';
import CardsService from '../../services/cards.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent {
  loginName = 'Your Name';

  constructor(private cardsService: CardsService) { }

  data() {
    console.log(typeof this.cardsService.getCards());
  }
}

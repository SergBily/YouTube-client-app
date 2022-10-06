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

  messageOpen = false;

  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {

  }

  protected getResult(value: string): void {
    this.messageOpen = value.trim() ? !this.messageOpen : this.messageOpen;

    if (this.messageOpen) {
      this.cardsService.getCards();
    }
  }
}

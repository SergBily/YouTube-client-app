import {
  Component, OnInit,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  loginName = 'Your Name';

  areOpenSettings = false;

  constructor() { }

  ngOnInit(): void {}
}

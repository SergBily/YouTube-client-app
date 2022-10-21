import { Component, OnInit } from '@angular/core';
import ApiService from 'src/app/core/services/api/api.service';
import AuthStateService from '../../services/login/auth-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent implements OnInit {
  curQuery!: string | null;

  constructor(public authState: AuthStateService, public api: ApiService) { }

  ngOnInit(): void {
    this.curQuery = localStorage.getItem('currentQuery');
  }

  removeQuery(): void {
    localStorage.removeItem('currentQuery');
  }
}

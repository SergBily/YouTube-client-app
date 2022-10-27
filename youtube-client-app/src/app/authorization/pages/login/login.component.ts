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

  isAccess = false;

  isValidPassword!: boolean;

  isValidEmail!: boolean;

  constructor(
    public authState: AuthStateService,
    public api: ApiService,
  ) { }

  ngOnInit(): void {
    this.curQuery = localStorage.getItem('currentQuery');
  }

  removeQuery(): void {
    localStorage.removeItem('currentQuery');
  }

  toggleAccess(input: any) {
    if (input.nameInput === 'email') {
      this.isValidEmail = input.isValid;
    } else {
      this.isValidPassword = input.isValid;
    }

    this.isAccess = this.isValidEmail && this.isValidPassword;
  }
}

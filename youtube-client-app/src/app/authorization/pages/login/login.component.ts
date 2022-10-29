import { Component, OnInit } from '@angular/core';
import LoginService from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent implements OnInit {
  login: string | null = localStorage.getItem('login');

  isAccess = false;

  isValidPassword!: boolean;

  isValidEmail!: boolean;

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }

  toggleAccess(input: any): void {
    if (input.nameInput === 'email') {
      this.isValidEmail = input.isValid;
    } else {
      this.isValidPassword = input.isValid;
    }

    this.isAccess = this.isValidEmail && this.isValidPassword;
  }

  runLogout(): void {
    this.loginService.logout();
    window.location.reload();
  }
}

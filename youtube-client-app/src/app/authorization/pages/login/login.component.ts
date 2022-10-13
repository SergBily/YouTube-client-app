import { Component, OnInit } from '@angular/core';
import LoginService from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent implements OnInit {
  login: string | null = localStorage.getItem('login');

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }
}

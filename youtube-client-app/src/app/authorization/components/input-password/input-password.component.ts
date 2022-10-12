import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import LoginService from '../../services/login/login.service';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
})
export default class InputPasswordComponent implements OnInit {
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }
}

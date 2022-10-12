import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import LoginService from '../../services/login/login.service';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss'],
})
export default class InputEmailComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
  }
}

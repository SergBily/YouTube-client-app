import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import InputLoginStatus from 'src/app/shared/models/input-status.model';
import LoginService from '../../services/login/login.service';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
})
export default class InputPasswordComponent implements OnInit {
  protected passwordFormControl!: FormControl;

  @Output() password = new EventEmitter<InputLoginStatus>();

  constructor(public loginService: LoginService) { }

  ngOnInit(): void {
    this.passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  }

  protected changeValidStatus(): void {
    this.password.emit({ nameInput: 'password', isValid: this.passwordFormControl.valid });
  }
}

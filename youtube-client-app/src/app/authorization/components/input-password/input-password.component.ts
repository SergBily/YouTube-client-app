import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import InputLoginStatus from 'src/app/shared/models/input-status.model';
import AuthStateService from '../../services/login/auth-state.service';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
})
export default class InputPasswordComponent implements OnInit {
  protected passwordFormControl!: FormControl;

  @Output() password = new EventEmitter<InputLoginStatus>();

  constructor(public authState: AuthStateService) { }

  ngOnInit(): void {
    this.passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  }

  protected changeValidStatus(): void {
    this.password.emit({ nameInput: 'password', isValid: this.passwordFormControl.valid });
  }
}

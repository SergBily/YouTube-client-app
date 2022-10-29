import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import InputLoginStatus from 'src/app/shared/models/input-status.model';
import AuthStateService from '../../services/login/auth-state.service';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss'],
})
export default class InputEmailComponent implements OnInit {
  protected emailFormControl!: FormControl;

  @Output() email = new EventEmitter<InputLoginStatus>();

  constructor(public authState: AuthStateService) { }

  ngOnInit(): void {
    this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  }

  protected changeValidStatus(): void {
    this.email.emit({ nameInput: 'email', isValid: this.emailFormControl.valid });
  }
}

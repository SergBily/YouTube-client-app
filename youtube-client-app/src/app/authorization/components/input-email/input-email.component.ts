import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import InputLoginStatus from 'src/app/shared/models/input-status.modet';

@Component({
  selector: 'app-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss'],
})
export default class InputEmailComponent implements OnInit {
  protected emailFormControl!: FormControl;

  @Output() email = new EventEmitter<InputLoginStatus>();

  constructor() { }

  ngOnInit(): void {
    this.emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  }

  protected changeValidStatus(): void {
    this.email.emit({ nameInput: 'email', isValid: this.emailFormControl.valid });
  }
}

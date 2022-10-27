import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder, FormControl, FormGroup, Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import CustomValidatorDateService from '../../services/validator/custom-validator.service';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
})
export default class NewCardComponent implements OnInit, OnDestroy {
  createCardGroup!: FormGroup;

  urlPattern = /^http(s)?:\/\/([\w.]+\/?)\S*$/;

  status = false;

  statusForm!: Subscription;

  constructor(private fb: FormBuilder, private customValidator: CustomValidatorDateService) { }

  ngOnInit(): void {
    this.createCardGroup = this.fb.group(
      {
        title: new FormControl(
          '',
          [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(20),
          ],
        ),
        description: new FormControl(
          '',
          [
            Validators.nullValidator,
            Validators.maxLength(250),
          ],
        ),
        img: new FormControl(
          '',
          [
            Validators.required,
            Validators.pattern(this.urlPattern),
          ],
        ),
        video: new FormControl(
          '',
          [
            Validators.required,
            Validators.pattern(this.urlPattern),
          ],
        ),
        date: new FormControl(
          '',
          [
            Validators.required,
            this.customValidator.customValidatorForDate(),
          ],
        ),
      },
    );
    this.statusForm = this.createCardGroup.statusChanges.subscribe(
      (status) => { this.status = status === 'VALID'; },
    );
  }

  ngOnDestroy(): void {
    this.statusForm.unsubscribe();
  }
}

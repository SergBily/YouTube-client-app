import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export default class CustomValidatorDateService {
  constructor() { }

  public customValidatorForDate(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const { value } = control;
      const today = new Date().getTime();
      const customDate = new Date(value).getTime();
      const isValidDate = (today - customDate) < 1;

      return isValidDate ? { date: true } : null;
    };
  }
}

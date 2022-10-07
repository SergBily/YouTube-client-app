import { Directive, HostBinding, Input } from '@angular/core';
import HighLightEnum from 'src/app/shared/models/highlight.enum';

@Directive({
  selector: '[appHighlight]',
})
export default class HighlightDirective {
  @Input() appHighlight!: string;

  count!: number;

  day = 60 * 60 * 24 * 1000;

  week = 7;

  month = 30;

  halfYear = 6 * 30;

  constructor() {}

  @HostBinding('style.backgroundColor') get getColor() {
    this.count = Math.trunc((Date.now() - Date.parse(this.appHighlight)) / this.day);
    if (this.count < this.week) {
      return HighLightEnum.blue;
    } if (this.count < this.month) {
      return HighLightEnum.green;
    } if (this.count < this.halfYear) {
      return HighLightEnum.yellow;
    }
    return HighLightEnum.red;
  }
}

import {
  Directive, ElementRef, Input, OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export default class HighlightDirective implements OnInit {
  @Input() appHighlight!: string;

  count!: number;

  color!: string;

  day = 60 * 60 * 24 * 1000;

  week = 7;

  month = 30;

  halfYear = 6 * 30;

  constructor(private el: ElementRef<HTMLDivElement>) {}

  ngOnInit(): void {
    this.count = Math.trunc((Date.now() - Date.parse(this.appHighlight)) / this.day);

    if (this.count < this.week) {
      this.color = 'blue';
    } else if (this.count < this.month) {
      this.color = 'green';
    } else if (this.count < this.halfYear) {
      this.color = 'yellow';
    } else {
      this.color = 'red';
    }

    this.el.nativeElement.style.backgroundColor = this.color;
  }
}

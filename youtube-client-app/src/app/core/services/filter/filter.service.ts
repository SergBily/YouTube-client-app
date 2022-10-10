import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class FilterService {
  value!: string;

  constructor() { }
}

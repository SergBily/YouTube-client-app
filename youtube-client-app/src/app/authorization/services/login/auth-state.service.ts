import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class AuthStateService {
  email!: string;

  password!: string;

  private state: boolean = !!localStorage.getItem('stateAuth');

  private authSubject = new BehaviorSubject<boolean>(this.state);

  constructor() { }

  public setAuthState(state: boolean): void {
    this.authSubject.next(state);
    localStorage.setItem('stateAuth', `${state}`);
  }

  public getCurrentState(): boolean {
    return this.authSubject.getValue();
  }

  public getStateChanged(): Observable<boolean> {
    return this.authSubject.asObservable();
  }
}

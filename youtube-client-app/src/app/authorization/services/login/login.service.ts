import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class LoginService {
  email!: string;

  password!: string;

  constructor() { }

  public login(): void {
    const dataLogin: string = JSON.stringify({ email: this.email, password: this.password });
    localStorage.setItem('login', dataLogin);
  }

  public logout(): void {
    localStorage.removeItem('login');
  }
}

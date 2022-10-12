import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class LoginService {
  isLogin = false;

  email!: string;

  password!: string;

  constructor() { }

  public login(): void {
    const dataLogin: string = JSON.stringify({ email: this.email, password: this.password });
    localStorage.setItem('login', dataLogin);
    this.isLogin = !this.isLogin;
  }

  public logout(): void {
    localStorage.removeItem('login');
    this.isLogin = !this.isLogin;
  }
}

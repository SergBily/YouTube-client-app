import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import AuthStateService from '../../services/login/auth-state.service';

@Injectable({
  providedIn: 'root',
})
export default class AuthGuard implements CanActivate {
  constructor(private router: Router, private authState: AuthStateService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkLogin();
  }

  private checkLogin(): boolean {
    const state: boolean = this.authState.getCurrentState();
    if (state) { return true; }

    this.router.navigate(['/authorization/login']);

    return false;
  }
}

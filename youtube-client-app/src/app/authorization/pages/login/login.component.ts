import {
  Component, ElementRef, OnInit, Renderer2, ViewChild,
} from '@angular/core';
import ApiService from 'src/app/core/services/api/api.service';
import AuthStateService from '../../services/login/auth-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent implements OnInit {
  @ViewChild('btnLogin') btnLogin!: ElementRef<HTMLButtonElement>;

  curQuery!: string | null;

  isAccess = false;

  isValidPassword!: boolean;

  isValidEmail!: boolean;

  constructor(
    public authState: AuthStateService,
    public api: ApiService,
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.curQuery = localStorage.getItem('currentQuery');
  }

  removeQuery(): void {
    localStorage.removeItem('currentQuery');
  }

  toggleAccess(input: any) {
    if (input.nameInput === 'email') {
      this.isValidEmail = input.isValid;
    } else {
      this.isValidPassword = input.isValid;
    }

    this.isAccess = this.isValidEmail && this.isValidPassword;

    if (this.isAccess) {
      this.renderer.setStyle(this.btnLogin.nativeElement, 'backgroundColor', '#2F80ED');
    } else {
      this.renderer.setStyle(this.btnLogin.nativeElement, 'backgroundColor', 'rgba(47, 128, 237, 0.3)');
    }
  }
}

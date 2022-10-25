import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import AuthorizationRoutingModule from './authorization-routing.module';
import RegistrationComponent from './pages/registration/registration.component';
import LoginComponent from './pages/login/login.component';
import InputEmailComponent from './components/input-email/input-email.component';
import InputPasswordComponent from './components/input-password/input-password.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    InputEmailComponent,
    InputPasswordComponent,
  ],
  imports: [
    AuthorizationRoutingModule,
    CommonModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
  ],
})
export default class AuthorizationModule { }

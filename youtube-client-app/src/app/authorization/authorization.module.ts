import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
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
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports: [
    LoginComponent,
  ],
})
export default class AuthorizationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import RegistrationComponent from './pages/registration/registration.component';
import LoginComponent from './pages/login/login.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export default class AuthorizationModule { }

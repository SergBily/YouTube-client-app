import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import AdminRoutingModule from './admin-routing.module';
import AdminComponent from './admin.component';
import NewCardComponent from './components/new-card/new-card.component';

@NgModule({
  declarations: [
    AdminComponent,
    NewCardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
})
export default class AdminModule { }

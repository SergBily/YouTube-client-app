import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import HeaderComponent from './components/header/header.component';
import NotFoundComponent from './pages/not-found/not-found.component';
import InputSearchComponent from './components/input-search/input-search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    InputSearchComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    IconSpriteModule.forRoot({ path: 'assets/svg/sprite-main.svg' }),
  ],
  exports: [
    HeaderComponent,
  ],
})
export default class CoreModule { }

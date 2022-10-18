import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import HeaderComponent from './components/header/header.component';
import InputSearchComponent from './components/input-search/input-search.component';
import SortComponent from './components/sort/sort.component';
import PageNotFoundComponent from './pages/page-not-found/page-not-found.component';
import { APP_CONFIG, DEFAULT_CONFIG } from '../shared/config/app.config';

@NgModule({
  declarations: [
    HeaderComponent,
    InputSearchComponent,
    SortComponent,
    PageNotFoundComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule,
    IconSpriteModule.forRoot({ path: 'assets/svg/sprite-main.svg' }),
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [{ provide: APP_CONFIG, useValue: DEFAULT_CONFIG }],
})
export default class CoreModule { }

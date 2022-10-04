import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { MatButtonModule } from '@angular/material/button';
import MainComponent from './pages/main/main.component';
import SearchItemComponent from './components/search/search-item/search-item.component';
import SearchResultsComponent from './components/search/search-results/search-results.component';
import CoreModule from '../core/core.module';
import DetailedComponent from './pages/detailed/detailed.component';
import FiltersPipe from './pipes/filters/filters.pipe';

@NgModule({
  declarations: [
    MainComponent,
    SearchItemComponent,
    SearchResultsComponent,
    DetailedComponent,
    FiltersPipe,
  ],
  imports: [
    CommonModule,
    CoreModule,
    MatButtonModule,
    IconSpriteModule.forRoot({ path: 'assets/svg/sprite-main.svg' }),
  ],
  exports: [
    MainComponent,
  ],
})
export default class YoutubeModule { }

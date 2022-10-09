import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconSpriteModule } from 'ng-svg-icon-sprite';
import { MatButtonModule } from '@angular/material/button';
import MainComponent from './pages/main/main.component';
import SearchItemComponent from './components/search-item/search-item.component';
import SearchResultsComponent from './components/search-results/search-results.component';
import DetailedComponent from './pages/detailed/detailed.component';
import FiltersPipe from './pipes/filters/filters.pipe';
import HighlightDirective from './directives/highlight/highlight.directive';

@NgModule({
  declarations: [
    MainComponent,
    SearchItemComponent,
    SearchResultsComponent,
    DetailedComponent,
    FiltersPipe,
    HighlightDirective,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    IconSpriteModule.forRoot({ path: 'assets/svg/sprite-main.svg' }),
  ],
})
export default class YoutubeModule { }

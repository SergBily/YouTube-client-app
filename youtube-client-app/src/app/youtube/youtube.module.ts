import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import MainComponent from './pages/main/main.component';
import SearchItemComponent from './components/search/search-item/search-item.component';
import SearchResultsComponent from './components/search/search-results/search-results.component';
import FilterComponent from './components/filter/filter.component';
import CoreModule from '../core/core.module';
import { DetailedComponent } from './pages/detailed/detailed.component';

@NgModule({
  declarations: [
    MainComponent,
    SearchItemComponent,
    SearchResultsComponent,
    FilterComponent,
    DetailedComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
  exports: [
    MainComponent,
  ],
})
export default class YoutubeModule { }

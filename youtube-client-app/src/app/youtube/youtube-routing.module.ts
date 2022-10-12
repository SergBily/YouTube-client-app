import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import DetailedComponent from './pages/detailed/detailed.component';
import MainComponent from './pages/main/main.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'detailed', component: DetailedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class YoutubeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AuthGuard from '../authorization/guards/auth/auth.guard';
import DetailedComponent from './pages/detailed/detailed.component';
import MainComponent from './pages/main/main.component';

const routes: Routes = [
  {
    path: 'main',
    canActivate: [AuthGuard],
    children: [
      { path: 'search', component: MainComponent },
    ],
  },
  { path: 'detailed', component: DetailedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class YoutubeRoutingModule { }

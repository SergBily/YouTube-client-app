import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'authorization', loadChildren: () => import('./authorization/authorization.module').then((m) => m.default) },
  { path: 'youtube', loadChildren: () => import('./youtube/youtube.module').then((m) => m.default) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }

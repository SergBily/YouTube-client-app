import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import PageNotFoundComponent from './core/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'authorization', loadChildren: () => import('./authorization/authorization.module').then((m) => m.default) },
  { path: 'youtube', loadChildren: () => import('./youtube/youtube.module').then((m) => m.default) },
  { path: '', redirectTo: '/authorization/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload',
    },
  )],
  exports: [RouterModule],
})
export default class AppRoutingModule { }

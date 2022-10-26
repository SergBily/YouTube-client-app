import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AuthGuard from '../authorization/guards/auth/auth.guard';
import NewCardComponent from './components/new-card/new-card.component';

const routes: Routes = [{ path: 'create', canActivate: [AuthGuard], component: NewCardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class AdminRoutingModule { }

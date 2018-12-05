import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { JoinComponent } from './join/join.component';

const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  { path: 'user', component: UserComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'join', component: JoinComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

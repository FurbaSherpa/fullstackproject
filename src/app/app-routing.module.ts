import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', redirectTo: '/players', pathMatch: 'full' },
  // {
  //   path: 'user',
  //   loadChildren: './user/user-routing.module#UserRoutingModule'
  // },
  // {
  //   path: 'admin',
  //   loadChildren: './admin/admin-routing.module#AdminRoutingModule'
  // },
  { path: 'admin', component: AdminComponent},
  { path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

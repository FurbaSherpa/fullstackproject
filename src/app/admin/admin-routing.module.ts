import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdmingamesComponent } from './components/admingames/admingames.component';
import { AdminplayersComponent } from './components/adminplayers/adminplayers.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path:'admincreate', component: AddComponent },
          { path:'adminedit/:id', component: EditComponent },
          { path:'admingames', component: AdmingamesComponent },
          { path:'adminplayers', component: AdminplayersComponent },
          { path:'', component: AdminplayersComponent }
        ]
      }
    ]
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './components/games/games.component';
import { PlayersComponent } from './components/players/players.component';
import { JoinComponent } from './components/join/join.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        children: [
          { path:'games', component: GamesComponent },
          { path:'players', component: PlayersComponent },
          { path: '', component: PlayersComponent },
          { path: 'join/:id', component: JoinComponent}
        ]
      }
    ]
  }

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

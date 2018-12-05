import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule,
   MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule
   } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayersComponent } from './user/components/players/players.component';
import { GamesComponent } from './user/components/games/games.component';
import { UserRoutingModule } from './user/user-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { EditComponent } from './admin/components/edit/edit.component';
import { AddComponent } from './admin/components/add/add.component';
import { AdminplayersComponent } from './admin/components/adminplayers/adminplayers.component';
import { AdmingamesComponent } from './admin/components/admingames/admingames.component';
import { PlayersService } from './players.service';
import { JoinComponent } from './join/join.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    PlayersComponent,
    GamesComponent,
    EditComponent,
    AddComponent,
    AdminplayersComponent,
    AdmingamesComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    UserRoutingModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule,
    MatIconModule, 
    MatButtonModule, 
    MatCardModule, 
    MatTableModule, 
    MatDividerModule, 
    MatSnackBarModule
  ],
  providers: [
    PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

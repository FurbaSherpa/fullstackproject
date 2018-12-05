import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';

import { Game } from '../../../games.model';
import { GamesService } from '../../../games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[];
  displayedColumns = ['Title', 'Platform', 'Genre', 'Rating', 'Publisher', 'Release', 'Status','actions'];
  constructor(private GamesService: GamesService, private router: Router) { }

  ngOnInit() {
    this.fetchGames();
  }

  fetchGames(){
    this.GamesService
      .getGames()
      .subscribe((data: Game[]) => {
        this.games = data;
        console.log('Data requested....');
        console.log(this.games);
      });

}
}

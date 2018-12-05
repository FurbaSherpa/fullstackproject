import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Player } from '../../../players.model';
import { PlayersService } from '../../../players.service'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  
  players: Player[];
  displayedColumns = ['username', 'rank', 'score', 'time', 'favorite', 'status', 'actions'];

  constructor(private playersService: PlayersService, private router: Router) { }

  ngOnInit() {
    this.fetchPlayers();
    /**
    this.playersService.getPlayers().subscribe((player) => {
      console.log(player);
       
    });*/
  }

  fetchPlayers(){
    this.playersService
      .getPlayers()
      .subscribe((data: Player[]) => {
        this.players = data;
        console.log('Data requested....');
        console.log(this.players);
      });
  }

  updatePlayer(id){
    this.router.navigate([`/update/${id}`]);
  }

  deletePlayer(id){
    this.playersService.deletePlayer(id).subscribe(()=>{
      this.fetchPlayers();
    })
  }

  joinPlayer(id){
    this.router.navigate([`/join/${id}`]);
  }


}

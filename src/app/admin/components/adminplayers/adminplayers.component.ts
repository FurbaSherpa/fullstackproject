import { Component, OnInit } from '@angular/core';
import { Player } from '../../../players.model';
import { PlayersService } from '../../../players.service'
import {Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';



@Component({
  selector: 'app-adminplayers',
  templateUrl: './adminplayers.component.html',
  styleUrls: ['./adminplayers.component.css']
})
export class AdminplayersComponent implements OnInit {

  players: Player[];
  displayedColumns = ['username', 'rank', 'score', 'time', 'favorite', 'status', 'actions'];

  constructor(private playersService: PlayersService, private router: Router) { }

  ngOnInit() {
    this.fetchPlayers();
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
    });
  }

}

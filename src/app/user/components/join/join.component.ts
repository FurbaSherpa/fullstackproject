import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayersService} from '../../../players.service';
import { Player } from '../../../players.model';
@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  id: String;
  player: any = {};

  players: Player[];
  displayedColumns = ['username', 'rank', 'score', 'time', 'favorite', 'status'];

  constructor(private playersService: PlayersService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb : FormBuilder) {
    this.id = this.route.snapshot.paramMap.get('id'); 
   }

   ngOnInit() {
    
    // this.playersService.getPlayersByID(this.id).subscribe(res => {
    //     this.player = res;
    //     this.joinForm.get('username').setValue(this.player.username);
    //     this.joinForm.get('rank').setValue(this.player.rank);
    //     this.joinForm.get('score').setValue(this.player.score);
    //     this.joinForm.get('time').setValue(this.player.time);
    //     this.joinForm.get('favorite').setValue(this.player.favorite);
    //     this.joinForm.get('customer').setValue(this.player.customer);
    //     this.joinForm.get('status').setValue(this.player.status);
    //   });
    this.getOnePlayer();
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

  getOnePlayer(){
    this.playersService
    .getPlayersByID(this.id)
    .subscribe((data:Player[]) => {
      this.players = data;
      console.log(this.players);
    });

  }

}

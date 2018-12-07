import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material';
import { PlayersService } from '../../../players.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: String;
  player: any = {};
  updateForm: FormGroup;

  constructor(public playersService: PlayersService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb : FormBuilder) {
    this.id = this.route.snapshot.paramMap.get('id');    
    this.addForm();
   }
  ngOnInit() {
    
    this.playersService.getPlayersByID(this.id).subscribe(res => {
        this.player = res;
        console.log('i am resr:');
        console.log(res);
        this.updateForm.get('username').setValue(this.player.username);
        this.updateForm.get('rank').setValue(this.player.rank);
        this.updateForm.get('score').setValue(this.player.score);
        this.updateForm.get('time').setValue(this.player.time);
        this.updateForm.get('favorite').setValue(this.player.favorite);
        this.updateForm.get('customer').setValue(this.player.customer);
        this.updateForm.get('status').setValue(this.player.status);
      });
  }

  addForm(){
    this.updateForm = this.fb.group({
      username: [this.player.username, Validators.required],
      rank: '',
      score:'',
      time: '',
      favorite: '',
      customer: '',
      status: ''
    });
   }


  updatePlayers(username, rank, score, time, favorite, customer, status){
    this.playersService.updatePlayers(this.id, username, rank, score, time, favorite, customer, status).subscribe(() => {
      this.snackBar.open('Player updated sucessfully', 'OK', {
        duration: 3000
      });
    });
  }

}

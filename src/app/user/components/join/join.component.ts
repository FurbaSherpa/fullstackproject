import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl} from '@angular/forms';
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
  joinForm: FormGroup;

  players: Player[];
  displayedColumns = ['username', 'rank', 'score', 'time', 'favorite', 'actions'];

  constructor(private playersService: PlayersService, private router: Router, private route: ActivatedRoute, private snackBar: MatSnackBar, private fb : FormBuilder) {
    this.id = this.route.snapshot.paramMap.get('id'); 
   }

   ngOnInit() {
    
     this.playersService.getPlayersByID(this.id).subscribe(res => {
         this.player = res;
         this.joinForm.get('username').setValue(this.player.username);
         this.joinForm.get('rank').setValue(this.player.rank);
         this.joinForm.get('score').setValue(this.player.score);
         this.joinForm.get('time').setValue(this.player.time);
         this.joinForm.get('favorite').setValue(this.player.favorite);
         this.joinForm.get('customer').setValue(this.player.customer);
         this.joinForm.get('status').setValue(this.player.status);
       });
       this.addForm();
       this.joinForm.controls['username'].disable();
       this.joinForm.controls['rank'].disable();
       this.joinForm.controls['score'].disable();
       this.joinForm.controls['time'].disable();
       this.joinForm.controls['favorite'].disable();

       //this.joinForm.disable()

  }

  addForm(){
    this.joinForm = this.fb.group({
      username: [this.player.username, Validators.required],
      rank: '',
      score:'',
      time: '',
      favorite: '',
      customer: '',
      status: ''
    });
   }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PlayersService } from '../../../players.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm: FormGroup;

  constructor(private PlayersSerivce : PlayersService, private fb : FormBuilder, private router: Router) { 
    this.addForm = this.fb.group({
      username: ['', Validators.required],
      rank: '',
      score:'',
      time: '',
      favorite: '',
      customer: ''
    });
  }

  addPlayers(username, rank, score, time, favorite, customer){
    this.PlayersSerivce.addPlayers(username, rank, score, time, favorite, customer).subscribe(() => {
      this.router.navigate(['/adminplayers']);
    });
  }

  ngOnInit() {
  }

}

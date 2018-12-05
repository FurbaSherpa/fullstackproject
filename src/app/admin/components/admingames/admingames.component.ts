import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { Game } from '../../../game';
import { GAMES } from '../../../mock-games';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-admingames',
  templateUrl: './admingames.component.html',
  styleUrls: ['./admingames.component.css']
})
export class AdmingamesComponent implements OnInit {
  games = GAMES;
  displayedColumns = ['Title', 'Platform', 'Genre', 'Rating', 'Publisher', 'Release', 'Status'];
  constructor() { }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  uri= 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPlayers(){
    return this.http.get(`${this.uri}/playerRoutes`);
  }

  getPlayersByID(id){
    return this.http.get(`${this.uri}/playerRoutes/${id}`);
  }

  addPlayers(username,rank,score,time,favorite,customer){
    const player = {
        username: username,
        rank: rank,
        score: score,
        time: time,
        favorite: favorite,
        customer: customer
    };
    return this.http.post(`${this.uri}/playerRoutes/add`, player);
  }

  updatePlayers(id, username,rank,score,time,favorite,customer, status){
    const player = {
        username: username,
        rank: rank,
        score: score,
        time: time,
        favorite: favorite,
        customer: customer,
        status: status
    };
    return this.http.post(`${this.uri}/playerRoutes/update/${id}`, player);
  }

  deletePlayer(id){
    return this.http.get(`${this.uri}/playerRoutes/delete/${id}`);
  }
}

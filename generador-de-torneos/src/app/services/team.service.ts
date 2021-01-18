import { Injectable } from '@angular/core';
import { Team } from '../models/team';
@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teams:Team[] = [
    {
      name: 'Boca',
      selected: false
    },
    {
      name: 'River',
      selected: false
    },
    {
      name: 'Nacional',
      selected: false
    },
    {
      name: 'Palmeiras',
      selected: true
    }
  ];
  
  constructor() { }

  getTeams(){
    return this.teams;
  }

  addTeam(team:Team){
    this.teams.unshift(team);
  }
}

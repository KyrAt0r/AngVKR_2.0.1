import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {TeamsService} from '../teams.service';

@Component({
  selector: 'app-topteam',
  templateUrl: './topteam.component.html',
  styleUrls: ['./topteam.component.css']
})
export class TopteamComponent implements OnInit {

  responsTeam: any;
  constructor(private Teams: TeamsService,
              private router: Router) { }

  ngOnInit(): void {
    this.Teams.getTeams().subscribe((respons) => {
      this.responsTeam = respons;
      console.log(this.responsTeam);
    })
  }

}

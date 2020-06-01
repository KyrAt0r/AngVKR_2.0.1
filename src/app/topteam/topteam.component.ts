import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TeamsService} from '../teams.service';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import './script';
import './packed';

@Component({
  selector: 'app-topteam',
  templateUrl: './topteam.component.html',
  styleUrls: ['./topteam.component.css']
})
export class TopteamComponent implements OnInit {

  faTrophy = faTrophy;

  search: any;

  responsTeam: any;
  constructor(private Teams: TeamsService,
              private router: Router) { }

  ngOnInit(): void {
    this.Teams.getTeams().subscribe((respons) => {
      this.responsTeam = respons;
    })
  }

}

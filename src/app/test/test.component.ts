import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { TeamsService} from '../teams.service';
import {Router} from '@angular/router';

interface AA {
  idTeam: number;
  teamName: string;
  capId: number;
  coachId: number;
  teamRating: number;
}

const AAA: AA[] = [
  {idTeam: 1, teamName: 'string', capId: 2, coachId: 2, teamRating: 0},
  {idTeam: 2, teamName: 'testste', capId: 3, coachId: 3, teamRating: 0},
  {idTeam: 3, teamName: 'Yura', capId: 12, coachId: 15, teamRating: 0},
  ];

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private Teams: TeamsService,
              private router: Router) { }

  displayedColumns: string[];
  dataSource ;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {

    this.Teams.getTeams().subscribe((respons) => {
      this.displayedColumns = ['idTeam', 'teamName', 'capId', 'coachId', 'teamRating'];
      this.dataSource.data = (Array.of<AA>(JSON.parse(JSON.stringify(respons.content))));

      this.dataSource.sort = this.sort;
    });
  }


  getTeamss() {
    this.Teams.getTeams().subscribe((respons) => {
      this.displayedColumns = ['idTeam', 'teamName', 'capId', 'coachId', 'teamRating'];
      this.dataSource.data = (Array.of(JSON.stringify(respons.content)));
      this.dataSource.sort = this.sort;
      alert(JSON.stringify(JSON.stringify(respons.content).replace('"', ' ' )));
    });
  }

  AAA(){
    this.Teams.getTeams().subscribe((respons) => {
      this.displayedColumns = ['idTeam', 'teamName', 'capId', 'coachId', 'teamRating'];
      this.dataSource = new MatTableDataSource(AAA);
      this.dataSource.sort = this.sort;
      alert(AAA);
    });
  }
}

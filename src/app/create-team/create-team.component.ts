import { Component, OnInit } from '@angular/core';
import {Topics} from '../topics';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  topics: Topics = new Topics();
  receivedUser: Topics;
  done = false;
  responsSubjects: any;
  responsTest: any;


  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }

  createTeam(topics: Topics) {
    const body = {
      idTeam: 0,
      teamName: topics.teamName,
      capId: topics.capId,
      coachId: topics.coachId,
      teamRating: 0
    };
    this.http.post('http://saber011-001-site1.htempurl.com/api/teams/AddTeams', body)
      .subscribe(
        (data: Topics) => {
          this.receivedUser = data;
          this.done = true;
        },
        error => console.log(error)
      );
  }
}

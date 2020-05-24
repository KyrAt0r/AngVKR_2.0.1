import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topics} from '../topics';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  topics: Topics = new Topics();
  receivedUser: Topics;
  done = false;
  responsContext: any;
  responsUsers: any;
  responsTeams: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    {
      this.http.get('http://saber011-001-site1.htempurl.com/api/Context/GetContexts')
        .subscribe((respons) => {
          this.responsContext = respons;
          console.log(this.responsContext);
        });
    }

    {
      this.http.get('http://saber011-001-site1.htempurl.com/api/Account/GetAllUsers')
        .subscribe((respons) => {
          this.responsUsers = respons;
          console.log(this.responsUsers);
        });
    }

    {
      this.http.get('http://saber011-001-site1.htempurl.com/api/teams/GetTeams')
        .subscribe((respons) => {
          this.responsTeams = respons;
          console.log(this.responsTeams);
        });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topics} from '../topics';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [
    trigger('animationTriggerName', [
      transition('void => *', [
        style({opacity: 0}),
        animate('0.3s', style({opacity: 1})),
      ]),
      transition('* => void', [
        animate('0.2s', style({opacity: 0}))
      ])
    ])
  ]
})
export class MainPageComponent implements OnInit {

  constructor(private http: HttpClient) { }
  topics: Topics = new Topics();
  receivedUser: Topics;
  done = false;
  responsContext: any;
  responsUsers: any;
  responsTeams: any;

  condition = false;
  state = 'initial';

  createTest() {
    this.condition = !this.condition;
    this.state = this.condition ? 'expanded' : 'initial';
  }

  ngOnInit(): void {
    {
      this.http.get('http://saber011-001-site1.htempurl.com/api/Context/GetContexts')
        .subscribe((respons) => {
          this.responsContext = respons;
          console.log(this.responsContext);
        });
    }

    {
      this.http.get('http://saberzero11-001-site1.atempurl.com/api/Account/GetAllUsers')
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

  createSubjects(topics: Topics) {
    const body = {
      idSubject: 0,
      nameSubject: topics.nameSubject,
    };
    this.http.post('http://saber011-001-site1.htempurl.com/api/NewService/AddSubject', body)
      .subscribe(
        (data: Topics) => {
          this.receivedUser = data;
          this.done = true;
          topics.nameSubject = '';
        },
        error => console.log(error)
      );
  }

}

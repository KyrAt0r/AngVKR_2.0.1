import { Component, OnInit } from '@angular/core';
import {Topics} from '../topics';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css']
})
export class CreateSubjectComponent implements OnInit {

  topics: Topics = new Topics();
  receivedUser: Topics;
  done = false;
  responsSubjects: any;


  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {

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

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Topics} from '../topics';

@Component({
  selector: 'app-create-edit',
  templateUrl: './create-edit.component.html',
  styleUrls: ['./create-edit.component.css']
})

export class CreateEditComponent implements OnInit {

  topics: Topics = new Topics();
  receivedUser: Topics;
  done = false;
  responsSubjects: any;
  responsTest: any;


  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    {
      this.http.get('http://saber011-001-site1.htempurl.com/api/NewService/GetSubjects')
        .subscribe((respons) => {
          this.responsSubjects = respons;
          console.log(this.responsSubjects);
        });
    }
  }

  createSubject(topics: Topics) {
    const body = {
      idTest: 0,
      idSubject: topics.idSubject,
      nameTest: topics.nameTest,
//      nameExercises: topics.nameExercises,
//      textExercises: topics.textExercises,
//      answerExercises: topics.answerExercises,
//      levelExercises: topics.levelExercises,
    };
    this.http.post('http://saber011-001-site1.htempurl.com/api/NewService/AddTest?number=1', body)
      .subscribe(
        (data: Topics) => {
          this.receivedUser = data;
          this.done = true;
          topics.nameTest = '';
        },
        error => console.log(error)
      );
  }

}

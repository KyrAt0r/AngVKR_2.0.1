import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface responseInfo {
  errorCode: number;
  errorContextInfoId: number;
  errorMessage: string;
  status: number;
  validationErrors: string;
}
interface contentSubjects {
  idSubject: number;
  nameSubject: string;
}
interface contentTests {
  idTest: number;
  idSubject: number;
  nameTest: string;
}
interface contentExercises {
  idExercises: number;
  idTest: number;
  nameExercises: string;
  textExercises: string;
  answerExercises: string;
  levelExercises: number;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
  // get request
  getSubjects() {
    return this.http.get<contentSubjects>('http://saberzero11-001-site1.atempurl.com/api/NewService/GetSubjects');
  }
  getTests() {
    return this.http.get<contentTests>('http://saberzero11-001-site1.atempurl.com/api/NewService/GetTests');
  }
  getExercises() {
    return this.http.get<contentExercises>('http://saberzero11-001-site1.atempurl.com/api/NewService/GetExercisess');
  }
  // add request
  postSubjects(idSubject, nameSubject) {
    return this.http.post<contentSubjects>('http://saberzero11-001-site1.atempurl.com/api/NewService/AddSubject', {
      idSubject,
      nameSubject
    });
  }
  postTests(idTest, idSubject, nameTest) {
    return this.http.post<contentTests>('http://saberzero11-001-site1.atempurl.com/api/NewService/AddTest?number=1', {
      idTest,
      idSubject,
      nameTest
    });
  }
  postExercises(idExercises, idTest, nameExercises, textExercises, answerExercises, levelExercises) {
    return this.http.post<contentExercises>('http://saberzero11-001-site1.atempurl.com/api/NewService/AddTask', {
      idExercises,
      idTest,
      nameExercises,
      textExercises,
      answerExercises,
      levelExercises
    });
  }
  // update request
  updateSubjects(idSubject, nameSubject) {
    return this.http.post<contentSubjects>('http://saberzero11-001-site1.atempurl.com/api/NewService/EditSubject', {
      idSubject,
      nameSubject
    });
  }
  updateTest(idTest, idSubject, nameTest) {
    return this.http.post<contentTests>('http://saberzero11-001-site1.atempurl.com/api/NewService/EditTest', {
      idTest,
      idSubject,
      nameTest
    });
  }
  updateExercises(idExercises, idTest, nameExercises, textExercises, answerExercises, levelExercises) {
    return this.http.post<contentExercises>('http://saberzero11-001-site1.atempurl.com/api/NewService/EditExercises', {
      idExercises,
      idTest,
      nameExercises,
      textExercises,
      answerExercises,
      levelExercises
    });
  }
  // delite request
  detiteSubjects(idSubject) {
    return this.http.post<contentSubjects>('http://saberzero11-001-site1.atempurl.com//api/NewService/DeleteSubject)', idSubject);
  }
  detiteTests(idTest) {
    return this.http.post<contentTests>('http://saberzero11-001-site1.atempurl.com//api/NewService/DeleteTest)', idTest);
  }
  detiteExercises(idExercises) {
    return this.http.post<contentExercises>('http://saberzero11-001-site1.atempurl.com//api/NewService/DeleteExercises)', idExercises);
  }
}
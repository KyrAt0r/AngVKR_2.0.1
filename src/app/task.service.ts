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
  ///get///
  getSubjects() {
    return this.http.get<contentSubjects>('https://olimpres.azurewebsites.net/api/NewService/GetSubjects');
  }
  getTests() {
    return this.http.get<contentTests>('https://olimpres.azurewebsites.net/api/NewService/GetTests');
  }
  getTaskText(id) {
    return this.http.get(`https://olimpres.azurewebsites.net/api/NewService/GetExercises?id=` + id);
  }
  getExercises() {
    return this.http.get<contentExercises>('https://olimpres.azurewebsites.net/api/NewService/GetExercisess');
  }
  ///post///
  // add request
  postSubjects(idSubject, nameSubject) {
    return this.http.post<contentSubjects>('https://olimpres.azurewebsites.net/api/NewService/AddSubject', {
      idSubject,
      nameSubject
    });
  }
  postTests(idTest, idSubject, nameTest) {
    return this.http.post<contentTests>('https://olimpres.azurewebsites.net/api/NewService/AddTest?number=1', {
      idTest,
      idSubject,
      nameTest
    });
  }
  postExercises(idExercises, idTest, nameExercises, textExercises, answerExercises, levelExercises) {
    return this.http.post<contentExercises>('https://olimpres.azurewebsites.net/api/NewService/AddTask', {
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
    return this.http.post<contentSubjects>('https://olimpres.azurewebsites.net/api/NewService/EditSubject', {
      idSubject,
      nameSubject
    });
  }
  updateTest(idTest, idSubject, nameTest) {
    return this.http.post<contentTests>('https://olimpres.azurewebsites.net/api/NewService/EditTest', {
      idTest,
      idSubject,
      nameTest
    });
  }
  updateExercises(idExercises, idTest, nameExercises, textExercises, answerExercises, levelExercises) {
    return this.http.post<contentExercises>('https://olimpres.azurewebsites.net/api/NewService/EditExercises', {
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
    return this.http.post<contentSubjects>('https://olimpres.azurewebsites.net/api/NewService/DeleteSubject)', idSubject);
  }
  detiteTests(idTest) {
    return this.http.post<contentTests>('https://olimpres.azurewebsites.net/api/NewService/DeleteTest)', idTest);
  }
  detiteExercises(idExercises) {
    return this.http.post<contentExercises>('https://olimpres.azurewebsites.net/api/NewService/DeleteExercises)', idExercises);
  }
}
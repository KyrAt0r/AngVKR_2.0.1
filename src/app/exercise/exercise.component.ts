import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
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
export class ExerciseComponent implements OnInit {

  constructor(
              private Subject: TaskService) { }

  responsSubjects: any;
  responsTest: any;
  responsExercises: any;

  conditionSubjects = false;
  stateSubjects = 'initial';

  conditionTest = false;
  stateTest = 'initial';

  conditionExercises = false;
  stateExercises = 'initial';

  createSubjects() {
    this.conditionSubjects = !this.conditionSubjects;
    this.stateSubjects = this.stateSubjects ? 'expanded' : 'initial';
  }
  createTests() {
    this.conditionTest = !this.conditionTest;
    this.stateTest = this.conditionTest ? 'expanded' : 'initial';
  }
  createExercisess() {
    this.conditionExercises = !this.conditionExercises;
    this.stateExercises = this.conditionExercises ? 'expanded' : 'initial';
  }

  ngOnInit(): void {
    // get
    this.Subject.getSubjects().subscribe((respons) => {
      this.responsSubjects = respons;
    });
    this.Subject.getTests().subscribe((response) => {
      this.responsTest = response;
    });
    this.Subject.getExercises().subscribe((respons) => {
      this.responsExercises = respons;
    });
  }
  // add
  createSubject(event) {
    event.preventDefault();
    const target = event.target;
    const idSubject = 0;
    const nameSubject = target.querySelector('#nameSubject').value;
    this.Subject.postSubjects(idSubject, nameSubject).subscribe( data => {
      console.log(data);
    });
  }
  createTest(event) {
    event.preventDefault();
    const target = event.target;
    const idTest = 0;
    const idSubject = Number(target.querySelector('#idSubject').value);
    const nameTest = target.querySelector('#nameTest').value;
    this.Subject.postTests(idTest, idSubject, nameTest).subscribe( data => {
      console.log(data);
    });
  }
  createExercises(event) {
    event.preventDefault();
    const target = event.target;
    const idExercises = 0;
    const idTest = Number(target.querySelector('#idTest').value);
    const nameExercises = target.querySelector('#nameExercises').value;
    const textExercises = target.querySelector('#textExercises').value;
    const answerExercises = target.querySelector('#answerExercises').value;
    const levelExercises = Number(target.querySelector('#levelExercises').value);
    this.Subject.postExercises(idExercises, idTest, nameExercises, textExercises, answerExercises, levelExercises).subscribe( data => {
      console.log(data);
    });
  }

  deliteExercises(idExercises) {

  }
}

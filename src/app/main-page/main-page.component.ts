import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {TaskService} from '../task.service';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';

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



  faDiceD20 = faDiceD20;

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
}

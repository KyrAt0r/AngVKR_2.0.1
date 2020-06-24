import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private Subject: TaskService) { }

  responsSubjects: any;
  responsTest: any;
  responsExercises: any;

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

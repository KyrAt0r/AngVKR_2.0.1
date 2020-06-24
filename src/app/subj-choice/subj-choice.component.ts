import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-subj-choice',
  templateUrl: './subj-choice.component.html',
  styleUrls: ['./subj-choice.component.css']
})
export class SubjChoiceComponent implements OnInit {

  responsSubjects: any;

  constructor(private Subject: TaskService) { }

  ngOnInit(): void {
    this.Subject.getSubjects().subscribe((respons) => {
      this.responsSubjects = respons;
    });
  }

}

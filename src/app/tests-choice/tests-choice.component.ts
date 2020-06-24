import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tests-choice',
  templateUrl: './tests-choice.component.html',
  styleUrls: ['./tests-choice.component.css']
})
export class TestsChoiceComponent implements OnInit {

  responsTest: any;

  constructor(private activatedRoute: ActivatedRoute, private Subject: TaskService) { }

  ngOnInit(): void {
    let nameSub: string;
    nameSub = this.activatedRoute.snapshot.paramMap.get('nameSub');
    this.Subject.getTests().subscribe((response) => {
    this.responsTest = response;
  });
  }

}

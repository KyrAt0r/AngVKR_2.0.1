import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../task.service';
import './code';

@Component({
  selector: 'app-expid',
  templateUrl: './expid.component.html',
  styleUrls: ['./expid.component.css']
})

export class ExpidComponent implements OnInit {

  responsText: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private Subject: TaskService
  ) { }

  ngOnInit(): void {
    let id: number;
    id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.Subject.getTaskText(id).subscribe((respons) => {
      this.responsText = respons;
      //alert(this.responsText.content.nameExercises);
    });


  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../task.service';


@Component({
  selector: 'app-taskid',
  templateUrl: './taskid.component.html',
  styleUrls: ['./taskid.component.css']
})
export class TaskidComponent implements OnInit {

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
    });
  }
}

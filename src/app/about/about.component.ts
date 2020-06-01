import { Component, OnInit } from '@angular/core';
import { faCrutch } from '@fortawesome/free-solid-svg-icons';
import './sTable';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faCrutch = faCrutch;
  constructor() { }

  ngOnInit(): void {

  }

}

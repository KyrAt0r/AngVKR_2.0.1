import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { faHome, faScroll, faBookDead, faSignOutAlt, faDiceD20, faUser, faTrophy } from '@fortawesome/free-solid-svg-icons';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faHome = faHome;
  faScroll = faScroll;
  faBookDead = faBookDead;
  faSignOutAlt = faSignOutAlt;
  faDiceD20 = faDiceD20;
  faUser = faUser;
  faTrophy = faTrophy;
  
  title = 'angulartitle';

  public UserName: string = localStorage.getItem('username');

  constructor(private titleService: Title) {}

  setDocTitle(title: string) {
     console.log('current title:::::' + this.titleService.getTitle());
     this.titleService.setTitle(title);
  }
}
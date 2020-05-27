import { Component } from '@angular/core';
import { faHome, faScroll, faBookDead, faSignOutAlt, faDiceD20 } from '@fortawesome/free-solid-svg-icons';

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
}

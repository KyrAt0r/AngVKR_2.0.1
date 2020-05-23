import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './loguot.component.html',
  styleUrls: ['./loguot.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private user: UserService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.user.logout().subscribe(data => {
      if(data.success) {
        this.router.navigate([''])
        this.auth.setLoggedIn(false)
      } else {
        window.alert('Some problem')
      }
    })
  }

}



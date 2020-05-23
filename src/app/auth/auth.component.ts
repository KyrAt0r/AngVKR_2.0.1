import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  data1: any;

  constructor(private Auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  loginUser(event) {
    event.preventDefault();
    const target = event.target;
    const login = target.querySelector('#login').value;
    const password = target.querySelector('#password').value;

    this.Auth.getUserDetails(login, password).subscribe(data => {
      if (data.responseInfo.status === 0) {
        this.router.navigate(['home']);
        this.Auth.setLoggedIn(true);
      } else {
        window.alert(login);
      }
      console.log(login , password);

    })
  }
}

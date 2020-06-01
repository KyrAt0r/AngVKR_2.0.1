import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  faExclamationCircle = faExclamationCircle;

  done: boolean = false;
  ermass: string;

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
      if (data.responseInfo.status === 0 && data.responseInfo.errorMessage === null) {
        this.router.navigate(['home']);
        console.log(data);
        this.Auth.setLoggedIn(true);
        localStorage.setItem('ID', String(data.content.id));
        localStorage.setItem('access_token', data.content.access_token);
        localStorage.setItem('username', data.content.username);
        this.done = true;
      } else {
        this.ermass = data.responseInfo.errorMessage;
      }
      console.log(login , password);

    });
  }
}

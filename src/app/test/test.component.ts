import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { faExclamationCircle, faSignInAlt, faRegistered } from '@fortawesome/free-solid-svg-icons';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  faExclamationCircle = faExclamationCircle;
  faSignInAlt = faSignInAlt;
  faRegistered = faRegistered;

  user: SocialUser;


  done: boolean = false;
  ermass: string;

  constructor(private Auth: AuthService,
              private router: Router,
              private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
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


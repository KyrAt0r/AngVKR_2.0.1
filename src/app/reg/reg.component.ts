import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import {AuthService} from '../auth.service';



@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  done: boolean = false;
  ermass: string;

  faExclamationCircle=faExclamationCircle;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() { }

  registerUser(event) {
    event.preventDefault();
    const errors = [];
    const target = event.target;
    const login = target.querySelector('#login').value;
    const password = target.querySelector('#password').value;
    const password1 = target.querySelector('#cpassword').value;

    if (password !== password1) {
      this.ermass = "Пароли не совпадают"
    }else {

    if (errors.length === 0) {
      this.auth.registerUser(login, password).subscribe(data => {
        console.log(data);
        if (data.responseInfo.status === 0) {
          this.router.navigate(['auth']);
        } else {
          this.ermass = data.responseInfo.errorMessage;
        }
      });
    }
    console.log(login, password);
  }
  }

}

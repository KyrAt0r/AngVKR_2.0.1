import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

import {AuthService} from '../auth.service';



@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() { }

  registerUser(event) {
    event.preventDefault();
    const errors = [];
    const target = event.target;
    const login = target.querySelector('#login').value;
    const password = target.querySelector('#password').value;
    const password1 = target.querySelector('#cpassword').value;

    let ErMass=1

    if(password !== password1) {
      ErMass === 1
    }

    // more validation

    if (errors.length === 0) {
      this.auth.registerUser(login, password).subscribe(data => {
        console.log(data);
        if (data.success) {
          this.router.navigate(['dashboard']);
        }
      });
    }
    console.log(login, password);
  }

}

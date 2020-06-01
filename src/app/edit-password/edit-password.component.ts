import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {UserService} from '../user.service';
import { faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent {

  ermass: string;
  compmass: string;

  faExclamationCircle = faExclamationCircle;
  faCheckCircle = faCheckCircle;

  constructor(private user: UserService,
              private router: Router) { }

  EdPass(event) {
    const errors = [];
    const target = event.target;
    const login = localStorage.getItem('username');
    const login1 = target.querySelector('#login').value;
    const newPasswrod: string = target.querySelector('#password').value;
    const password1 = target.querySelector('#cpassword').value;
    const id: number = Number(localStorage.getItem('ID'));
    if (login !== login1) {
      this.ermass = 'Логины не совпадают';
    } else {
      if (newPasswrod !== password1) {
        this.ermass = 'Пароли не совпадают';
      } else {
        if (errors.length === 0) {
          alert(localStorage.getItem('ID'))
          this.user.editPass(id, newPasswrod).subscribe(data => {
            if (data.content.messege !== null) {
              this.compmass = data.content.messege;
            } else {
              this.ermass = data.responseInfo.errorMessage;
            }
          });
        }
      }
    }
  }
}

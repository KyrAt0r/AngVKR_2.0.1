import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {

  user: User = new User();
  receivedUser: User;
  done: boolean = false;

  constructor(private http: HttpClient) {
  }

  submit(user: User) {
    const body = {login: user.login, password: user.password};
    this.http.post('http://saber011-001-site1.htempurl.com/api/Account/register', body)
      .subscribe(
        (data: User) => {
          this.receivedUser = data;
          this.done = true;
        },
        error => console.log(error)
      );
  }

}

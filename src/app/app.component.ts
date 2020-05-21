import { Component } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User = new User();
  receivedUser: User;
  done: boolean = false;
  respons: any;


  constructor(private http: HttpClient) {
  }

  submit(user: User) {
    const body = {login: user.login, password: user.password};
    alert (user.login);
    this.http.post('http://saber011-001-site1.htempurl.com/api/Account/register', body)
      .subscribe(
        (data: User) => {
          this.receivedUser = data;
          this.done = true;
        },
        error => console.log(error)
      );
  }

  search() {
    this.http.get('http://saber011-001-site1.htempurl.com/api/Account/GetUserById/' + this.user)
      .subscribe((respons) => {
        this.respons = respons;
        console.log(this.respons);
      });
  }
}

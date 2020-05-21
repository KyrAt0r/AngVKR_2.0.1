import {Injectable} from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import {User} from './user';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  postData(user: User) {
    const body = {login: user.login, password: user.password};
    return this.http.post('http://saber011-001-site1.htempurl.com/api/Account/login', body);
  }

  getData() {
    return this.http.get('http://saber011-001-site1.htempurl.com/api/Account/GetAllUsers');
  }
}

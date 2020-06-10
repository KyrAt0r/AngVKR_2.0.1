import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  content: content;
  responseInfo: responseInfo;
}

interface content {
  access_token: string;
  id: number;
  username: string;

}

interface responseInfo {
  errorCode: number;
  errorContextInfoId: number;
  errorMessage: string;
  status: number;
  validationErrors: string;
}

interface registerResponse {
  success: boolean;
  message: string;
  responseInfo: responseInfo;
}

@Injectable()
export class AuthService {

  private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
    localStorage.setItem('loggedIn', this.loggedInStatus.toString());
  }

  get isLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString())
  }

  getUserDetails(login, password) {
    // post these details to API server return user info if correct

    return this.http.post<myData>('http://olimpres.azurewebsites.net/api/Account/login', {
      login,
      password
      });
  }

  registerUser(login, password) {
    return this.http.post<registerResponse>('http://olimpres.azurewebsites.net/api/Account/register', {
      login,
      password
    });
  }
}

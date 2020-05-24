import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface Content {
  access_token: string;
  username: string;
  responseInfo: responseInfo;
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
}

@Injectable()
export class AuthService {

  private loggedInStatus = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getUserDetails(login, password) {
    // post these details to API server return user info if correct

    return this.http.post<Content>('http://saber011-001-site1.htempurl.com/api/Account/login', {
      login,
      password
    });
  }

  registerUser(login, password) {
    return this.http.post<registerResponse>('http://saber011-001-site1.htempurl.com/api/Account/register', {
      login,
      password
    });
  }
}

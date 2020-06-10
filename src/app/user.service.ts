import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface EPstatus {
  content: content;
  responseInfo: responseInfo;
}

interface content {
  messege: string;
}

interface responseInfo {
  status: number;
  errorCode: number;
  errorMessage: string;
  validationErrors: number;
  errorContextInfoId: number;
}

interface isLoggedIn {
  status: boolean
}

interface logoutStatus {
  success: boolean
}

interface EPstatus {
  success: boolean
}
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('https://olimpres.azurewebsites.net/api/Account/GetAllUsers');
  }

  logout() {
    return this.http.get<logoutStatus>('https://olimpres.azurewebsites.net/api/Account/login');
  }

  editPass(id, newPasswrod) {
    return this.http.post<EPstatus>('https://olimpres.azurewebsites.net/api/Account/resertPassword', { id, newPasswrod });
  }

  getUserInfo(id) {
    return this.http.get(`https://olimpres.azurewebsites.net/api/Account/GetUserById?id=` + id);
  }
}

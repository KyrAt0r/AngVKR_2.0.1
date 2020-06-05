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
    return this.http.get<isLoggedIn>('http://saberzero11-001-site1.atempurl.com/api/Account/GetAllUsers');
  }

  logout() {
    return this.http.get<logoutStatus>('http://saberzero11-001-site1.atempurl.com/api/Account/login');
  }

  editPass(id, newPasswrod) {
    return this.http.post<EPstatus>('http://saberzero11-001-site1.atempurl.com/api/Account/resertPassword', { id, newPasswrod });
  }

  getUserInfo(id) {
    return this.http.get(`http://saberzero11-001-site1.atempurl.com/api/Account/GetUserById?id=` + id);
  }
}

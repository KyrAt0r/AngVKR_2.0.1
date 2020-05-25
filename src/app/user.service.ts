import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


interface isLoggedIn {
  status: boolean
}

interface logoutStatus {
  success: boolean
}
@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  isLoggedIn(): Observable<isLoggedIn> {
    return this.http.get<isLoggedIn>('http://saber011-001-site1.htempurl.com/api/Account/GetAllUsers')
  }

  logout() {
    return this.http.get<logoutStatus>('http://saber011-001-site1.htempurl.com/api/Account/login')
  }

}

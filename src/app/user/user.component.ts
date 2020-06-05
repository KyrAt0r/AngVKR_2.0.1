import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private Users: UserService) { }

  userRespons: any;
  public UserName: string = localStorage.getItem('username');
  id: number = Number(localStorage.getItem('ID'));

  ngOnInit(): void {
    this.Users.getUserInfo(this.id).subscribe((respons) => {
      this.userRespons = respons;
    });
  }

}

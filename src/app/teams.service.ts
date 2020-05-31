import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface teamlist {
  content: content;
  responseInfo: responseInfo;
}

export interface content {
  idTeam: number;
  teamName: string;
  capId: number;
  coachId: number;
  teamRating: number;

}

interface responseInfo {
  status: number;
  errorCode: number;
  errorMessage: string;
  validationErrors: number;
  errorContextInfoId: number;
}

export interface teams {
  idTeam: number;
  teamName: string;
  capId: number;
  coachId: number;
  teamRating: number;
}

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  public teamlists: content[] = [];

  constructor(private http: HttpClient) { }

  getTeams() {
    // return this.http.get<teamlist>('http://saberzero11-001-site1.atempurl.com/api/teams/GetTeams');
     return this.http.get<teamlist>('http://saber011-001-site1.htempurl.com/api/teams/GetTeams');
  }


  TeamList() {
    this.http.get<content>('http://saberzero11-001-site1.atempurl.com/api/teams/GetTeams');
    // return this.http.get<teamlist>('http://saber011-001-site1.htempurl.com/api/teams/GetTeams');
  }
}

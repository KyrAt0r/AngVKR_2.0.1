import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface teamlist {
  content: content;
  responseInfo: responseInfo;
}

interface content {
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

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get<teamlist>('http://saberzero11-001-site1.atempurl.com/api/teams/GetTeams');
  }

}

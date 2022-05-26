import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  private url = 'http://localhost:3000/api/follow'

  constructor(private http: HttpClient) { }

  //Get Follows
  getFollow(loggedUsserId) {
    return this.http.get(this.url + '/' + loggedUsserId);
  }

  //Generate Follows
  setFollow(id, loggedUserId) {
    let data = {
      id: id,
      loggedUserId: loggedUserId
    }
    return this.http.post(this.url, data);
  }
}

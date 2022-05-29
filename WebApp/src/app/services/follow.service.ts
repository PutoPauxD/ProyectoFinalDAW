import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  private url = 'http://localhost:3000/api/follow'

  constructor(private http: HttpClient) { }

  //Get Follows
  getFollow(loggedUsserId: number): Observable<Object> {
    return this.http.get(this.url + '/' + loggedUsserId);
  }

  //Generate Follows
  setFollow(id: number, loggedUserId: number): Observable<Object> {
    let data = {
      id: id,
      loggedUserId: loggedUserId
    }
    return this.http.post(this.url, data);
  }

  //Generate Follows
  unsetFollow(id: number, loggedUserId: number): Observable<Object> {
    return this.http.delete(this.url + '/' + loggedUserId + '/' + id);
  }

  checkActivityFollows(id: number, loggedUserId: number): Observable<Object> {
    return this.http.get(this.url + '/follows/' + id + '/' + loggedUserId,);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = 'http://localhost:3000/api/home/'

  constructor(private http: HttpClient) { }

  //Get Posts
  getHome(id): Observable<Object> {
    return this.http.get(this.url + id);
  }

  //Get Posts
  getHomeByUser(username): Observable<Object> {
    return this.http.get(this.url + 'profile/' + username);
  }

  //Get Post Data by idPost
  getHomeByPostId(id): Observable<Object> {
    return this.http.get(this.url + 'post/' + id);
  }

  getHomeByPostIdWithImage(id): Observable<Object> {
    return this.http.get(this.url + 'imagepost/' + id);
  }
}

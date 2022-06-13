import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = 'http://master-pwebmin-debian.lan:3000/api/home'

  constructor(private http: HttpClient) { }

  //Get Posts
  getHome(id, contador): Observable<Object> {
    return this.http.get(this.url + '/'  + id + '/' + contador);
  }

  //Get Posts
  getHomeByUser(username: string, contador): Observable<Object> {
    return this.http.get(this.url + '/'  + 'profile/' + username + '/' + contador);
  }

  //Get Post Data by idPost
  getHomeByPostId(id): Observable<Object> {
    return this.http.get(this.url + 'asd/'  + 'post/' + id);
  }

  getHomeByPostIdWithImage(id, n: number): Observable<Object> {
    return this.http.get(this.url + 'asd/'  + 'imagepost/' + id + '/' + n);
  }
}

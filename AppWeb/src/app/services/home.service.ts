import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url = 'http://localhost:3000/api/home/'

  constructor(private http: HttpClient) { }

  //Get Posts
  getHome() {
    return this.http.get(this.url);
  }

  //Get Posts
  getHomeByUser(username) {
    return this.http.get(this.url + username);
  }
}

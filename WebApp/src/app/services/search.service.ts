import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url = 'http://localhost:3000/api/search/'

  constructor(private http: HttpClient) {}

  //Buscar por usuario
  search(username: string): Observable<Object> {
    return this.http.get(this.url + username);
  }

}

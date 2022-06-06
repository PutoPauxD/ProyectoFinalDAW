import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:3000/api/users/';
  private : UsuarioModel;

  constructor(private http: HttpClient) { }

  //Get Users
  getUsers(): Observable<Object> {
    return this.http.get(this.url);
  }

  //Get Users
  getUsersToFollow(id: string): Observable<Object> {
    return this.http.get(this.url + 'tofollow/' + id);
  }

  //Get User
  getUser(id: number): Observable<Object> {
    return this.http.get(this.url+id);
  }

  changeUser(usuario: UsuarioModel): Observable<Object> {
    return this.http.put(this.url+usuario.id, usuario);
  }

  deleteUser(id: number): Observable<Object> {
    return this.http.delete(this.url + id);
  }
}

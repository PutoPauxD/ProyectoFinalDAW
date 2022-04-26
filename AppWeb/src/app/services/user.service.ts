import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { UsuarioModel } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:3000/api/users/';
  private userLogged: any;

  constructor(private http: HttpClient) { }

  //Get Users
  getUsers() {
    return this.http.get(this.url);
  }

  //Get User
  getUser(id: number) {
    return this.http.get(this.url+id);
  }

   changeUser(usuario: UsuarioModel) {
    return this.http.put(this.url+usuario.id, usuario);
  }

  login() {
    // this.setUserLogged(user)
  }

  getUserLogged() {
    return this.userLogged;
  }

  setUserLogged() {
    return this.userLogged;
  }
}

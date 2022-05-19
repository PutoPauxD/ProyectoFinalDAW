import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  private url = 'http://localhost:3000/api/authuser'
  private loggedIn: boolean;
  private userLogged: UsuarioModel;

  constructor(private http: HttpClient) {}

  //Auth User
  authUser(usuario) {
    this.loggedIn = true;
    return this.http.get(this.url + '/' + usuario.password + '/' + usuario.email);
  }

  //Registrar Usuario
  regUser(usuario) {
    return this.http.post(this.url, usuario);
  }

  isLogged() {
    return this.loggedIn;
  }

  getUserLogged() {
    return this.userLogged;
  }

  setUserLogged(usuario) {
    this.userLogged = usuario;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { loginUsuarioModel, registerUsuarioModel, UsuarioModel } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  private url = 'http://master-pwebmin-debian.lan:3000/api/authuser'
  private loggedIn: boolean;
  public userLogged: UsuarioModel;
  public userLoggedObs: BehaviorSubject<UsuarioModel> = new BehaviorSubject<UsuarioModel>(null);

  constructor(private http: HttpClient) {}

  //Auth User
  authUser(usuario: loginUsuarioModel): Observable<Object> {
    return this.http.get(this.url + '/' + usuario.password + '/' + usuario.email);
  }

  //Registrar Usuario
  regUser(usuario: registerUsuarioModel): Observable<Object> {
    return this.http.post(this.url, usuario);
  }

  setLoggedIn(loggedIn: boolean): void {
    this.loggedIn = loggedIn;
  }

  isLogged(): boolean {
    return this.loggedIn;
  }

  getUserLogged(): UsuarioModel {
    return this.userLogged;
  }

  getUserLoggedObs(): Subject<UsuarioModel> {
    return this.userLoggedObs;
  }
  setUserLogged(usuario: any): void {
    this.userLogged = usuario;
    this.userLoggedObs.next(usuario);
  }
}

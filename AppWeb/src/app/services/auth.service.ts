import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:3000/api/loguser'
  private loggedIn: boolean;

  constructor(private http: HttpClient) {this.loggedIn = false}

  //Auth User
  authUser(usuario) {
    this.loggedIn = true;
    return this.http.get(this.url + '/' + usuario.password + '/' + usuario.email);
  }

  //Registrar Usuario
  regUser(usuario) {
    return this.http.post(this.url, usuario);
  }

  isLoggedIn() {
    if(this.loggedIn) {
      return true;
    } else {
      return false
    }
  }
}

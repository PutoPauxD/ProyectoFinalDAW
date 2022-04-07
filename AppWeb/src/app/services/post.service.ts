import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { UsuarioModel } from '../model/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://localhost:3000/api/post/'

  constructor(private http: HttpClient) { }

  //Get Posts
  getPosts() {
    return this.http.get(this.url);
  }

  getPostsByUser(userId) {
    return this.http.get(this.url+userId+'/all');
  }

  //Get Post
  getPost(id: number) {
    return this.http.get(this.url+id);
  }

   changePost(usuario: UsuarioModel) {
    return this.http.put(this.url+usuario.id, usuario).pipe(take(1));
  }
}

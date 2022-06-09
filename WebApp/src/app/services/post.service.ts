import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'http://192.168.168.153:3000/api/post/'

  constructor(private http: HttpClient) { }

  //Get Posts
  getPosts() {
    return this.http.get(this.url);
  }

  getPostsByUser(userId: number): Observable<Object> {
    return this.http.get(this.url+userId+'/all');
  }

  //Get Post
  getPost(id: number): Observable<Object> {
    return this.http.get(this.url+id);
  }

  changePost(post: PostModel): Observable<Object> {
    return this.http.put(this.url+post.id, post);
  }

  createPost(post: PostModel): Observable<Object> {
    return this.http.post(this.url, post);
  }

  deletePost(id: number): Observable<Object> {
    return this.http.delete(this.url + id)
  }
}

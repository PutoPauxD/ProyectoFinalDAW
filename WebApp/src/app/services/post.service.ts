import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostModel } from '../model/post.model';

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

  changePost(post: PostModel) {
    return this.http.put(this.url+post.id, post);
  }

  createPost(post: PostModel) {
    return this.http.post(this.url, post);
  }

  deletePost(id: number) {
    return this.http.delete(this.url + id)
  }
}

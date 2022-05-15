import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostActivityService {

  private url = 'http://localhost:3000/api/activity/'

  constructor(private http: HttpClient) { }

  //Generar Actividad
  postActivity(activity) {
    return this.http.post(this.url, activity);
  }

  deleteActivity(activity) {
    return this.http.delete(this.url + activity.post_id, activity);
  }

  getActivityShares(id) {
    return this.http.get(this.url +'share/' + id)
  }

  getActivityLikes(id) {
    return this.http.get(this.url +'likes/' + id)
  }

  checkActivity(id, uid) {
    return this.http.get(this.url + 'isliked/' + id, uid);
  }

}

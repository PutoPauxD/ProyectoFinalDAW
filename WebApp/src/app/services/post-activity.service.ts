import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostActivityService {

  private url = 'http://localhost:3000/api/activity/'

  constructor(private http: HttpClient) { }

  //Generar Actividad
  postActivity(activity: any): Observable<Object> {
    return this.http.post(this.url, activity);
  }

  deleteActivity(activity: any): Observable<Object> {
    return this.http.delete(this.url + activity.post_id, activity);
  }

  getActivityShares(id: number): Observable<Object> {
    return this.http.get(this.url +'share/' + id)
  }

  getActivityLikes(id: number): Observable<Object> {
    return this.http.get(this.url +'likes/' + id)
  }

  checkActivityl(id: number, uid: number): Observable<Object> {
    return this.http.get(this.url + 'isLiked/' + id + '/' + uid,);
  }
  checkActivitys(id: number, uid: number): Observable<Object> {
    return this.http.get(this.url + 'isShared/' + id + '/' + uid,);
  }

  getActivityFromUser(user_id: number): Observable<Object> {
    return this.http.get(this.url+user_id);
  }
}

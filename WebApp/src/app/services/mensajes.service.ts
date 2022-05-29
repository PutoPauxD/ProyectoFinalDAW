import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private url = 'http://localhost:3000/api/mensajes/'

  constructor(private http: HttpClient) { }

  getMensajesByUsers(msjobj: any): Observable<Object> {
    return this.http.get(this.url + msjobj.userId, msjobj.id_recibe);
  }

  getChatsByUser(userId: number): Observable<Object> {
    console.log(userId)
    return this.http.get(this.url+userId+'/chats');
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mensajes } from '../functionalities/chats/messages/messages.component';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private url = 'http://localhost:3000/api/mensajes/'
  private msjobj: mensajes;

  constructor(private http: HttpClient) { }

  getMensajesByUsers(msjobj: mensajes): Observable<Object> {
    return this.http.get(this.url + msjobj.id_envia + '/' + msjobj.id_recibe);
  }

  getChatsByUser(userId: number): Observable<Object> {
    return this.http.get(this.url+userId+'/chats');
  }

  createMsj(msjobj: mensajes): Observable<Object> {
    return this.http.post(this.url, msjobj);
  }

  getMsjObj() {
    return this.msjobj;
  }

  setMsjObj(msjobj: mensajes) {
    this.msjobj = msjobj;
  }

}


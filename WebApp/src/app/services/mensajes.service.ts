import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mensajes } from '../functionalities/chats/messages/messages.component';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  private url = 'http://master-pwebmin-debian.lan:3000/api/mensajes/'
  private msjobj: mensajes;

  constructor(private http: HttpClient) { }

  generarChat(id_envia, id_recibe) {
    let msjobj = {
      id_envia,
      id_recibe
    }
    return this.http.post(this.url + 'chats/', msjobj);
  }

  getMensajesByUsers(msjobj: mensajes): Observable<Object> {
    return this.http.get(this.url + msjobj.id_envia + '/' + msjobj.id_recibe);
  }

  getChatsByUser(id_envia: number): Observable<Object> {
    return this.http.get(this.url + id_envia + '/chats');
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


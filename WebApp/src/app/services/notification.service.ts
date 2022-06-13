import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private url = 'http://master-pwebmin-debian.lan:3000/api/notification/'

  constructor(private http: HttpClient) { }

  //Recibir dato notificaciones
  getNotification(id: number): Observable<Object> {
    return this.http.get(this.url + id);
  }

}

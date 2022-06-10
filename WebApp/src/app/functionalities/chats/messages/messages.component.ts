import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { MensajesService } from 'src/app/services/mensajes.service';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  nuevoMensaje: String;
  mensajes: mensajes[];
  msjobj: mensajes;
  usuario: UsuarioModel

  constructor(private mensajeService: MensajesService, public publicService: PublicService) {
    this.mensajes = [];
    this.usuario = this.publicService.getUserLogged();
    this.msjobj = {
      id_envia: this.publicService.getUserLogged().id,
      id_recibe: this.mensajeService.getMsjObj().id_recibe,
    }

    this.mensajeService.getMensajesByUsers(this.msjobj).subscribe({
      next: (mensajes: mensajes[]) => {
        mensajes.forEach(mensaje => {
          this.mensajes.push(mensaje);
        })
      }
    });
  }

  public enviarMensaje(){
    console.log(this.nuevoMensaje);
    if(this.nuevoMensaje !== "") {
      this.msjobj.mensaje = this.nuevoMensaje;
      this.mensajeService.createMsj(this.msjobj).subscribe();
      this.mensajes.push(this.msjobj);
      this.nuevoMensaje = "";
    }
  }
}

export interface mensajes {
  id_envia?: number;
  id_recibe?: number;
  mensaje?: String;
}

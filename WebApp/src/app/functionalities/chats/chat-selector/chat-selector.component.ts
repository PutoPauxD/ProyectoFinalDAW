import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { MensajesService } from 'src/app/services/mensajes.service';
import { PublicService } from 'src/app/services/public.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat-selector',
  templateUrl: './chat-selector.component.html',
  styleUrls: ['./chat-selector.component.css']
})
export class ChatSelectorComponent {

  public chats: any[];

  constructor(private publicService: PublicService, private mensajeService: MensajesService, private userService: UserService) {
    this.chats = [];
    this.mensajeService.getChatsByUser(this.publicService.getUserLogged().id).subscribe({
      next: (ids: any) => {
        ids.forEach(id => {
            this.userService.getUser(id.id_recibe).subscribe({
              next: (userRecibe: any) => {
                this.mensajeService.getMensajesByUsers({id_envia: this.publicService.getUserLogged().id, id_recibe: userRecibe.id}).subscribe({
                  next: (mensaje: any[]) => {
                    if(mensaje[0]) {
                      userRecibe.lastMessage = mensaje[mensaje.length - 1].mensaje
                    }
                    this.chats.push(userRecibe);
                  }
                });
              }
            })
        });
      }
    })
  }
}

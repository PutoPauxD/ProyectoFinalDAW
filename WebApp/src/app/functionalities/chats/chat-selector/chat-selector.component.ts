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

  public chats: UsuarioModel[];

  constructor(private publicService: PublicService, private mensajeService: MensajesService, private userService: UserService) {
    this.chats = [];
    this.mensajeService.getChatsByUser(this.publicService.getUserLogged().id).subscribe({
      next: (ids: any) => {
        ids.forEach(id => {
            this.userService.getUser(id.id_recibe).subscribe({
              next: (userRecibe: UsuarioModel) => {this.chats.push(userRecibe)}
          });
        });
      }
    })

  }
}

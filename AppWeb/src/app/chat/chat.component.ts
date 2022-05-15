import { Component } from '@angular/core';
import { UsuarioModel } from '../model/usuario.model';
import { MensajesService } from '../services/mensajes.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent{
  nuevoMensaje: string;
  mensajes: any;
  mostrarChat: boolean;
  user_envia: UsuarioModel;
  user_recibe: UsuarioModel;
  private msjobj;

  constructor(private userService: UserService, private mensajesService: MensajesService) {
    this.nuevoMensaje = "";

    this.userService.getUser(1).subscribe({
      next: (user: UsuarioModel) => {
        this.user_envia = user
        this.userService.getUser(4).subscribe({
          next: (user: UsuarioModel) => {
            this.user_recibe = user

            this.msjobj = {
              userId: this.user_envia.id,
              id_recibe: this.user_recibe.id,
            }
            console.log(this.msjobj);

            // this.mensajesService.getMensajesByUsers(this.msjobj).subscribe({
            //   next: (mensajes) => this.mensajes = mensajes
            // })
          }
        });
      }
    });


  }

  enviarMensaje(){
    // const mensaje = {
    //   emisor: "1",
    //   texto: this.nuevoMensaje,
    // }
    // this.mensajes.push(mensaje);
    // this.nuevoMensaje = "";
    // setTimeout(() => {
    //   this.scrollToTheLastElementByClassName();
    // }, 30);
  }

  scrollToTheLastElementByClassName() {
    // let elements = document.getElementsByClassName('msj');
    // let ultimo: any = elements[(elements.length - 1)];
    // let top = ultimo.offsetTop;
    // console.log(top);

    // //@ts-ignore
    // document.getElementById('contenedorMsj')?.scrollTop = top;
  }


}

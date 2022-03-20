import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent {

  public usuario: UsuarioModel;

  public prevImagenRec: any;
  public imgChangeEvt: any;


  constructor(private userService: UserService) {
    this.userService.getUser(1).subscribe(users => {
      this.usuario = users[0]
    });
  }

  guardarFotoPerfil() {
    this.userService.changeUser(this.usuario).subscribe(
      {next: () =>this.usuario.profpicture = this.prevImagenRec}
    );
  }

  cambiarFotoPerfil(archivo: any): void {
    console.log(archivo);
    if(archivo.target.files[0].size < 269142) {
      this.imgChangeEvt = archivo;
    } else {
      alert('Por favor seleccione un archivo mas pequeño.');
      archivo = null;
    }
  }

  recortarImagen(imagen: ImageCroppedEvent) {
    this.prevImagenRec = imagen.base64;
  }

}

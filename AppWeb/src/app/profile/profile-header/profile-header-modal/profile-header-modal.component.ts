import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-header-modal',
  templateUrl: './profile-header-modal.component.html',
  styleUrls: ['./profile-header-modal.component.css']
})
export class ProfileHeaderModalComponent implements OnInit {

  public usuario: UsuarioModel;
  public prevImagenRec: any;
  public imgChangeEvt: any;


  constructor(private userService: UserService) {
    this.userService.getUser(1).subscribe(users => {
      this.usuario = users[0];
    });
  }

  ngOnInit(): void {
  }

  guardarFotoPerfil() {
    this.userService.changeUser(this.usuario).subscribe(
      {next: () => this.usuario.profpicture = this.prevImagenRec}
    );
  }

  recortarImagen(imagen: ImageCroppedEvent) {
    this.prevImagenRec = imagen.base64;
  }


  cambiarFotoPerfil(archivo: any): void {
    if(archivo.target.files[0].size < 269142) {
       this.imgChangeEvt = archivo;
    } else {
      alert('Por favor seleccione un archivo mas pequeño.');
      archivo = null;
    }
  }

}

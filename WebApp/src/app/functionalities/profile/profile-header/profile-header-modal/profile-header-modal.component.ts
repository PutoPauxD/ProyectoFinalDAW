import { Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { take } from 'rxjs';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { UserService } from 'src/app/services/user.service';
import { ViewChild } from '@angular/core';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-profile-header-modal',
  templateUrl: './profile-header-modal.component.html',
  styleUrls: ['./profile-header-modal.component.css']
})
export class ProfileHeaderModalComponent {

  @Input() public usuario: UsuarioModel;
  public prevImagenRec: any;
  public imgChangeEvt: any;
  public showEditModal: boolean;
  public username: UntypedFormControl;


  constructor(
    private userService: UserService,
    private publicService: PublicService,
    private router: Router
  ) {
      this.username = new UntypedFormControl('');
  }

  public onShowEditModal(): void {
    this.showEditModal = !this.showEditModal;
  }

  guardarFotoPerfil(): void {
    this.usuario.profpicture = this.prevImagenRec;
    localStorage.setItem('user', JSON.stringify(this.usuario));
    this.userService.changeUser(this.usuario).subscribe();
    this.publicService.setUserLogged(this.usuario)
    console.log(this.usuario.profpicture)
  }

  recortarImagen(imagen: ImageCroppedEvent): void {
    this.prevImagenRec = imagen.base64;
  }


  cambiarFotoPerfil(archivo: any): void {
    if(archivo.target.files[0].size < 200000) {
       this.imgChangeEvt = archivo;
    } else {
      alert('Por favor seleccione un archivo mas pequeño.');
      archivo = null;
    }
  }

  editarUsername(): void {
      this.usuario.username = this.username.value;
      localStorage.setItem('user', JSON.stringify(this.usuario));
      this.userService.changeUser(this.usuario).subscribe();
    }
}

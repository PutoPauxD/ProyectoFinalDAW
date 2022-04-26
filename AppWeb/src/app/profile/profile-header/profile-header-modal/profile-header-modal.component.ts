import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { take } from 'rxjs';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { UserService } from 'src/app/services/user.service';

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
  public username: FormControl;


  constructor(private userService: UserService) {
      this.username = new FormControl('');
  }

  public onShowEditModal(): void {
    this.showEditModal = !this.showEditModal;
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

  editarUsername(): void {
      this.usuario.username = this.username.value;
      this.userService.changeUser(this.usuario).pipe(take(1)).subscribe();
  }

}

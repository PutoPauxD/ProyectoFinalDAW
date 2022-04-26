import { Component } from '@angular/core';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent {

  public usuario: UsuarioModel;



  constructor(private userService: UserService) {
    this.userService.getUser(1).subscribe((users: UsuarioModel) => {
      this.usuario = users;
    });
  }




}

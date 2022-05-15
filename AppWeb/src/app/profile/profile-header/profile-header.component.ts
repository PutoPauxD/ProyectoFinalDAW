import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent {

  public usuario: UsuarioModel;

  constructor(private userService: UserService, private router: Router) {
    this.userService.getUser(1).subscribe((users: UsuarioModel) => {
      this.usuario = users;
    });
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}

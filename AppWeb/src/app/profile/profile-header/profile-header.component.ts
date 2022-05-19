import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent {

  public usuario: UsuarioModel;

  constructor(private userService: UserService, private router: Router, private authService: AuthService) {
    this.userService.getUser(1).subscribe((users: UsuarioModel) => {
      this.usuario = users;
    });
    console.log(this.authService.isLogged());
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}

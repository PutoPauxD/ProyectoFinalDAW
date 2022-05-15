import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  public usuario: UsuarioModel;

  constructor(private router: Router, private userService: UserService) {
    this.usuario = this.userService.getUserLogged();
    console.log(this.usuario);
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}

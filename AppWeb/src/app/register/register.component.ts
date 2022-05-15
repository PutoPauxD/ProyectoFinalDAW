import { Component } from '@angular/core';
import { UsuarioModel } from '../model/usuario.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public usuario: UsuarioModel;

  constructor(private authService: AuthService) { }

  Register() {
    this.authService.authUser(this.usuario).subscribe({
      next: (loggedUser) => {console.log("Lo que recibes: ", loggedUser)}
    })
  }
}

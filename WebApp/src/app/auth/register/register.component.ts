import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { registerUsuarioModel, UsuarioModel } from 'src/app/model/usuario.model';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public usuario :registerUsuarioModel = {
    name: '',
    username: '',
    email: '',
    password: '',
    profpicture: '',
    cumpleanios: new Date,
  };

  constructor(private publicService: PublicService, private router: Router) { }

  register() {
    this.publicService.regUser(this.usuario).subscribe();
    this.router.navigateByUrl('/login')
  }
}

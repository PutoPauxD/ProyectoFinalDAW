import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public usuario = {
    name: '',
    username: '',
    email: '',
    password: '',
    profpicture: '',
    cumpleanios: '',
  };

  constructor(private publicService: PublicService, private router: Router) { }

  register() {
    this.publicService.regUser(this.usuario).subscribe();
    this.router.navigateByUrl('/login')
  }
}

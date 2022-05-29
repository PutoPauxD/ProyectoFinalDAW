import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loginUsuarioModel } from 'src/app/model/usuario.model';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usuario: loginUsuarioModel = {
    email: '',
    password: '',
  };

  constructor(private publicService: PublicService, private router: Router) {
    this.publicService.setLoggedIn(false);
  }

  login(): void {
    this.publicService.authUser(this.usuario).subscribe({
      next: (loggedUsser) => {
        if (loggedUsser) {
          this.publicService.setUserLogged(loggedUsser);
          this.publicService.setLoggedIn(true);
          this.router.navigateByUrl('/home');
        }
      }
    })
  }
}


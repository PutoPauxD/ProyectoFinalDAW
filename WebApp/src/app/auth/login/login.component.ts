import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loginUsuarioModel, UsuarioModel } from 'src/app/model/usuario.model';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public notLogged: boolean;
  public usuario: loginUsuarioModel = {
    email: '',
    password: '',
  };

  constructor(private publicService: PublicService, private router: Router) {
    this.publicService.setLoggedIn(false);
    if(localStorage.getItem('user')){
      this.publicService.setLoggedIn(true);
      const user = JSON.parse(localStorage.getItem('user'));
      this.publicService.setUserLogged(user);
      this.router.navigateByUrl('/home');
    }
  }

  login(): void {
    this.publicService.authUser(this.usuario).subscribe({
      next: (loggedUsser) => {
        if (loggedUsser) {
          localStorage.setItem('user', JSON.stringify(loggedUsser));
          this.notLogged = false;
          this.publicService.setUserLogged(loggedUsser);
          this.publicService.setLoggedIn(true);
          this.router.navigateByUrl('/home');
        } else {
          this.notLogged = true;
        }
      }
    })
  }
}


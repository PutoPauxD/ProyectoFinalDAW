import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public usuario = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private usuarioService: UserService, private router: Router) { }

  login() {
    this.authService.authUser(this.usuario).subscribe({
      next: (loggedUser) => {
        this.usuarioService.setUserLogged(loggedUser);
        this.navigate('/home');
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  navigate(route: string): void {
    this.router.navigate([route]);
  }
}

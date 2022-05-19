import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.authUser(this.usuario).subscribe({
      next: (loggedUsser) => {
        this.authService.setUserLogged(loggedUsser);
        console.log(this.authService.getUserLogged());
        this.router.navigateByUrl('/register')
      }
    })
  }
}

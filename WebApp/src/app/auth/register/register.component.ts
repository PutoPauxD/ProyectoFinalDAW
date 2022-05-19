import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
  };

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.regUser(this.usuario).subscribe();
    console.log(this.usuario);
  }
}
// this.authService.authUser(this.usuario).subscribe({
//   next: (loggedUsser) => {
//     this.authService.setUserLogged(loggedUsser);
//     console.log(this.authService.getUserLogged());
//     this.router.navigateByUrl('/register')
//   }
// })

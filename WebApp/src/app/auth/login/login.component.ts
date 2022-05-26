import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PublicService } from 'src/app/services/public.service';

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

  constructor(private publicService: PublicService, private router: Router) {
    this.publicService.setLoggedIn(false);
  }

  login() {
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

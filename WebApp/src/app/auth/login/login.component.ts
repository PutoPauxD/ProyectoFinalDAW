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

  constructor(private publicService: PublicService, private router: Router) { }

  login() {
    this.publicService.authUser(this.usuario).subscribe({
      next: (loggedUsser) => {
        this.publicService.setUserLogged(loggedUsser);
        console.log(this.publicService.getUserLogged());
        this.router.navigateByUrl('/aull')
      }
    })
  }
}

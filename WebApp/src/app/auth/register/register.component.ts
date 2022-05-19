import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  };

  constructor(private publicService: PublicService, private router: Router) { }

  register() {
    this.publicService.regUser(this.usuario).subscribe();
    console.log(this.usuario);
  }
}

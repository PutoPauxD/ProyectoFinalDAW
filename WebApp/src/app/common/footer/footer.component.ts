import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {

  public usuario: UsuarioModel

  constructor(private publicService: PublicService, private router: Router) {
    this.usuario = this.publicService.getUserLogged();
  }

  public logout(): void {
    localStorage.setItem('user', '');
    this.publicService.setUserLogged({});
    this.publicService.setLoggedIn(false);
    this.router.navigateByUrl('/login');
  }

  public userProfile(): void {
    this.router.navigate(['/profile/'+this.usuario.id]);
  }

}

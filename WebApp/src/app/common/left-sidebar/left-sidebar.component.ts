import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent  {

  public usuario: UsuarioModel

  constructor(private publicService: PublicService, private router: Router) {
    this.publicService.getUserLoggedObs().subscribe(user => this.usuario = user)
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

  public changeTheme(): void {
    if (localStorage.getItem('theme') === 'bg-dark text-white') {
      localStorage.setItem('theme', 'bg-white text-dark');
      localStorage.setItem('background', 'bg-image-white');
      this.router.navigateByUrl('/login');
    } else {
      localStorage.setItem('theme', 'bg-dark text-white');
      localStorage.setItem('background', 'bg-image-dark');
      this.router.navigateByUrl('/login');
    }
  }
}

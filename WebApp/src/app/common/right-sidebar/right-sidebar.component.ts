import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { PublicService } from 'src/app/services/public.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css']
})
export class RightSidebarComponent  {

  public toFollow: UsuarioModel[];

  constructor(private userService: UserService, private publicService: PublicService, private router: Router) {
    this.userService.getUsersToFollow(this.publicService.getUserLogged().id.toString()).subscribe({
      next: (data: UsuarioModel[]) => this.toFollow = data
    })
  }

  public changeTheme(): void {
    if (localStorage.getItem('theme') === 'bg-dark text-white') {
      localStorage.setItem('theme', 'bg-white text-dark');
      this.router.navigateByUrl('/login');
    } else {
      localStorage.setItem('theme', 'bg-dark text-white');
      this.router.navigateByUrl('/login');
    }
  }

}

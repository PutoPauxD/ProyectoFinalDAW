import { Component, OnInit } from '@angular/core';
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

  constructor(private userService: UserService, private publicService: PublicService) {
    this.userService.getUsersToFollow(this.publicService.getUserLogged().id.toString()).subscribe({
      next: (data: UsuarioModel[]) => this.toFollow = data
    })
  }


}

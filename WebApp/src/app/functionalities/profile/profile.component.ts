import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { UserService } from 'src/app/services/user.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {

  public usuario: UsuarioModel;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private profileService: ProfileService) {
    this.activatedRoute.params.subscribe((resp: any) => {
      this.profileService.setidProfileSelected(resp.id)
      this.router.navigate(['/profile/' + resp.id + '/post'])
        this.userService.getUser(resp.id).subscribe({
          next: (user: UsuarioModel) => this.usuario = user
        })
    });
  }

}

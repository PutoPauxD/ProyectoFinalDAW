import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { FollowService } from 'src/app/services/follow.service';
import { UserService } from 'src/app/services/user.service';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  {

  public theme: string;
  public usuario: UsuarioModel;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userService: UserService,
              private followService: FollowService,
              private profileService: ProfileService) {
    this.activatedRoute.params.subscribe((resp: any) => {
      this.profileService.setidProfileSelected(resp.id)
      this.router.navigate(['/profile/' + resp.id + '/post'])
        this.userService.getUser(resp.id).subscribe({
          next: (user: UsuarioModel) => {

            this.followService.getFollowers(user.id).subscribe({
              next: seguidores => user.seguidores = seguidores as number
            });
            this.followService.getFollowing(user.id).subscribe({
              next: seguidos => user.seguidos = seguidos as number
            });
            this.userService.getNumberPost(user.id).subscribe({
              next: numPost => user.numeroPosts = numPost as number
            })

            this.usuario = user;
          }
        })
    });
    this.theme = localStorage.getItem('theme');
  }

}

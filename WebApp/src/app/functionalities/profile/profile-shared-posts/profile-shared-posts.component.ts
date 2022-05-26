import { Component } from '@angular/core';
import { PostModel } from 'src/app/model/post.model';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { HomeService } from 'src/app/services/home.service';
import { PostActivityService } from 'src/app/services/post-activity.service';
import { PublicService } from 'src/app/services/public.service';
import { UserService } from 'src/app/services/user.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-shared-posts',
  templateUrl: './profile-shared-posts.component.html',
  styleUrls: ['./profile-shared-posts.component.css']
})
export class ProfileSharedPostsComponent {

  dataPosts: PostModel[];
  usuario: UsuarioModel;

  constructor(private postActivityService: PostActivityService, private homeService: HomeService, private profileService: ProfileService, private userService: UserService) {
    this.dataPosts = [];
    this.userService.getUser(this.profileService.getidProfileSelected()).subscribe({
      next: (user: UsuarioModel) => {
        this.usuario = user;
        this.postActivityService.getActivityFromUser(this.usuario.id).subscribe({
          next: (dataBack: any[]) => {
            dataBack.forEach(interaccion => {
              this.homeService.getHomeByPostId(interaccion.post_id).subscribe({
                next: (postCompleto: any) => {
                  this.dataPosts.push(postCompleto);
                  this.postActivityService.getActivityShares(postCompleto.id_post).subscribe({next: (shares) => postCompleto.shares = shares as number});
                  this.postActivityService.getActivityLikes(postCompleto.id_post).subscribe({next: (likes) => postCompleto.likes = likes as number});
                }
              })
            });
          }
        })
      }
    })
  }

}


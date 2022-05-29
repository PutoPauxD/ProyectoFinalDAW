import { Component } from '@angular/core';
import { PostModel } from 'src/app/model/post.model';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { HomeService } from 'src/app/services/home.service';
import { PostActivityService } from 'src/app/services/post-activity.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-media-posts',
  templateUrl: './profile-media-posts.component.html',
  styleUrls: ['./profile-media-posts.component.css']
})
export class ProfileMediaPostsComponent  {

  dataPosts: PostModel[];
  usuario: UsuarioModel;

  constructor(private postService: PostService,
              private postActivityService:PostActivityService,
              private homeService: HomeService,
              private profileService: ProfileService,
              private userService: UserService) {

    this.dataPosts = [];

    this.userService.getUser(this.profileService.getidProfileSelected()).subscribe({
      next: (user: UsuarioModel) => {
        this.usuario = user;

        this.postService.getPostsByUser(this.usuario.id).subscribe({
          next: (dataBack: any[]) => {
            dataBack.forEach(interaccion => {
              if(interaccion.hasMedia === 1) {
                this.homeService.getHomeByPostIdWithImage(interaccion.id_post).subscribe({
                  next: (postCompleto: any) => {
                      this.dataPosts.push(postCompleto);
                      this.postActivityService.getActivityShares(postCompleto.id_post).subscribe({next: (shares) => postCompleto.shares = shares as number});
                      this.postActivityService.getActivityLikes(postCompleto.id_post).subscribe({next: (likes) => postCompleto.likes = likes as number});
                  }
                })
              }
            })
          }
        });
      }
    })
  }
}

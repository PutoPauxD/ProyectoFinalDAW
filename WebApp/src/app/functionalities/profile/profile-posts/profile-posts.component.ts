import { Component, Input, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { HomeService } from 'src/app/services/home.service';
import { PostActivityService } from 'src/app/services/post-activity.service';
import { UserService } from 'src/app/services/user.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.css']
})
export class ProfilePostsComponent {
  data:any;
  public usuario: UsuarioModel

  constructor(private homeService: HomeService, private postActivity: PostActivityService, private profileService: ProfileService, private userService: UserService) {
    this.userService.getUser(this.profileService.getidProfileSelected()).subscribe({
      next: (user: UsuarioModel) => {
      this.homeService.getHomeByUser(user.username).subscribe({
          next: (res: any) => {
            this.data = res;
            this.data.forEach(data => {
              this.postActivity.getActivityShares(data.id_post).subscribe({next: (shares) => data.shares = shares})
              this.postActivity.getActivityLikes(data.id_post).subscribe({next: (likes) => data.likes = likes})
            });
          }
        });
      }
    })
  }
}

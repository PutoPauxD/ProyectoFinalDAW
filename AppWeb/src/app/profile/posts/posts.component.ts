import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { PostActivityService } from 'src/app/services/post-activity.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  data: any;
  usuario: any;
  post: any;

  constructor(private homeService: HomeService, private postActivity: PostActivityService) {
    const username = "api"
    this.homeService.getHomeByUser(username).subscribe({
      next: (res: any) => {
        this.data = res;

        this.data.forEach(data => {
          this.usuario = {
            username: data.username,
            name: data.name,
            profpicture: data.profpicture,
          }
          this.post = {
            text: data.text,
            shares: 10,
          }
          this.postActivity.getActivityShares(data.id_post).subscribe({next: (shares) => data.shares = shares})
          this.postActivity.getActivityLikes(data.id_post).subscribe({next: (likes) => data.likes = likes})
        });
      }

    });
  }
}

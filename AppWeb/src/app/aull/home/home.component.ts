import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HomeService } from '../../services/home.service';
import { PostActivityService } from '../../services/post-activity.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any;
  usuario: any;
  post: any;

  constructor(private homeService: HomeService, private postActivity: PostActivityService, private usuarioService: UserService, private authService: AuthService) {
    this.usuario = this.usuarioService.getUser;
    console.log('logged in: ',this.authService.isLogged());
    this.homeService.getHome().subscribe({
      next: (data: any) => {
        this.data = data;

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

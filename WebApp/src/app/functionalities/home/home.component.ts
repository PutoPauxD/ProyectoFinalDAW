import { Component } from '@angular/core';
import { single } from 'rxjs';
import { PostModel } from 'src/app/model/post.model';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { PostActivityService } from 'src/app/services/post-activity.service';
import { PublicService } from 'src/app/services/public.service';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataPosts;
  usuario: UsuarioModel;
  post: any;

  constructor(private homeService: HomeService, private postActivity: PostActivityService, private publicService: PublicService) {
    this.usuario = this.publicService.getUserLogged();

    this.homeService.getHome(this.usuario.id).subscribe({
      next: (dataBack ) => {
        this.dataPosts = dataBack;
        this.dataPosts.forEach(singleData => {
          this.postActivity.getActivityShares(singleData.id_post).subscribe({next: (shares) => singleData.shares = shares as number});
          this.postActivity.getActivityLikes(singleData.id_post).subscribe({next: (likes) => singleData.likes = likes as number});
        })
      }
    })
  }
}

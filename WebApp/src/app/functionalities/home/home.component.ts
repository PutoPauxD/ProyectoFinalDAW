import { Component } from '@angular/core';
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
  dataPosts: any[];
  usuario: UsuarioModel;
  post: any;
  public contador: number = 1;
  direction: string = ""

  constructor(private homeService: HomeService,
              private postActivity: PostActivityService,
              private publicService: PublicService,
              ) {
    this.dataPosts = [];
    this.usuario = this.publicService.getUserLogged();
    this.homeService.getHome(this.usuario.id, this.contador).subscribe({
      next: (dataBack: any[] ) => {
        dataBack.forEach(singleData => {
          this.dataPosts.push(singleData);
          this.postActivity.getActivityShares(singleData.id_post).subscribe({next: (shares) => singleData.shares = shares as number});
          this.postActivity.getActivityLikes(singleData.id_post).subscribe({next: (likes) => singleData.likes = likes as number});
        })
      }
    })
  }

  onScrollDown(ev: any) {
    this.contador += 1;
    this.homeService.getHome(this.usuario.id, this.contador).subscribe({
      next: (dataBack: any[] ) => {
        dataBack.forEach(singleData => {
          this.dataPosts.push(singleData);
          this.postActivity.getActivityShares(singleData.id_post).subscribe({next: (shares) => singleData.shares = shares as number});
          this.postActivity.getActivityLikes(singleData.id_post).subscribe({next: (likes) => singleData.likes = likes as number});
        })
      }
    })
  }
}

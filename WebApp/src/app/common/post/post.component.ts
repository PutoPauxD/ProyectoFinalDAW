import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { PostActivityService } from 'src/app/services/post-activity.service';
import { PostService } from 'src/app/services/post.service';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() usuario: UsuarioModel;
  @Input() index: number;
  @Input() data: any;
  public liked: boolean;

  constructor(private postActivityService: PostActivityService,
              private postService: PostService,
              private publicService: PublicService,
              private router: Router) {
                this.usuario = this.publicService.getUserLogged();
              }

  ngOnInit(): void {
    this.postActivityService.checkActivityl(this.data.id_post, this.usuario.id).subscribe(resp => {
      if (resp) {this.liked = true}
    });
  }


  shareClicked() {
    this.postActivityService.checkActivitys(this.data.id_post, this.usuario.id).subscribe(resp => {
      if (resp) {
        this.liked = false;
        const activity = {
          post_id: this.data.id_post,
          user_id: this.usuario.id,
          type: 0,
        }
        this.data.likes -= 1;
        this.postActivityService.deleteActivity(activity).subscribe();
      } else {
        this.liked = true;
        const activity = {
          post_id: this.data.id_post,
          user_id: this.usuario.id,
          type: 0,
        }
        this.data.likes += 1;
        this.postActivityService.postActivity(activity).subscribe();
      }
    })
  }

  likeClicked() {
    this.postActivityService.checkActivityl(this.data.id_post, this.usuario.id).subscribe(resp => {
      if (resp) {
        this.liked = false;
        const activity = {
          post_id: this.data.id_post,
          user_id: this.usuario.id,
          type: 0,
        }
        this.data.likes -= 1;
        this.postActivityService.deleteActivity(activity).subscribe();
      } else {
        this.liked = true;
        const activity = {
          post_id: this.data.id_post,
          user_id: this.usuario.id,
          type: 0,
        }
        this.data.likes += 1;
        this.postActivityService.postActivity(activity).subscribe();
      }
    })
  }

  deletePost() {
    this.postService.deletePost(this.data.id_post).subscribe();
  }

  navigate(route: string): void {
    route += this.data.id;
    this.router.navigate([route]);
  }
}


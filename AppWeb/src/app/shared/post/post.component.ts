import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { PostActivityService } from 'src/app/services/post-activity.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{

  @Input() usuario: UsuarioModel;
  @Input() data: any;
  public liked: boolean;
  constructor(private postService: PostService, private postActivityService: PostActivityService, private router: Router) {}

  shareClicked() {
    const post = {
      text: this.data.text,
      shares: this.data.shares + 1,
      likes: this.data.likes,
      id: this.data.id_post,
    }
    const activity = {
      post_id: this.data.id_post,
      user_id: 1,
      type: 1,
    }

    this.data.shares += 1;

    this.postActivityService.postActivity(activity).subscribe();
    this.postService.changePost(post).subscribe();
  }

  likeClicked() {
    this.postActivityService.checkActivity(this.data.id_post, 1).subscribe(resp => {
      if (resp) {
        this.liked = false;
        const activity = {
          post_id: this.data.id_post,
          user_id: 1,
          type: 0,
        }
        this.data.likes -= 1;
        this.postActivityService.deleteActivity(activity).subscribe();
      } else {
        this.liked = true;
        const activity = {
          post_id: this.data.id_post,
          user_id: 1,
          type: 0,
        }
        this.data.likes += 1;
        this.postActivityService.postActivity(activity).subscribe();
      }
    })
  }
  navigate(route: string): void {
    route += this.data.id;
    this.router.navigate([route]);
  }
}


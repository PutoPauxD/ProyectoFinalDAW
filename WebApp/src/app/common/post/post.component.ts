import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostModel } from 'src/app/model/post.model';
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
  public shared: boolean;
  public theme: string;
  public nuevoPost: PostModel;

  constructor(private postActivityService: PostActivityService,
              private postService: PostService,
              private publicService: PublicService,
              ) {
                this.usuario = this.publicService.getUserLogged();
                this.theme = localStorage.getItem('theme');
                this.nuevoPost = {
                  id_user: this.usuario.id,
                  text: '',
                  likes: 0,
                  shares: 0,
                  hasMedia: 0,
                  media: '',
                };
              }

  ngOnInit(): void {
    this.postActivityService.checkActivityl(this.data.id_post, this.usuario.id).subscribe(resp => {
      if (resp) {this.liked = true}
    });
    this.postActivityService.checkActivitys(this.data.id_post, this.usuario.id).subscribe(resp => {
      if (resp) {this.shared = true}
    });
  }

  shareClicked(): void {
    this.postActivityService.checkActivitys(this.data.id_post, this.usuario.id).subscribe(resp => {
      if (resp) {
        this.shared = false;
        const activity = {
          post_id: this.data.id_post,
          user_id: this.usuario.id,
          type: 1,
        }
        this.data.shares -= 1;
        this.postActivityService.deleteActivity(activity).subscribe();
      } else {
        this.shared = true;
        const activity = {
          post_id: this.data.id_post,
          user_id: this.usuario.id,
          type: 1,
        }
        this.data.shares += 1;
        this.nuevoPost.text += 'He compartido el siguiente post! \n' + this.data.text;
        this.postActivityService.postActivity(activity).subscribe();
        this.postService.createPost(this.nuevoPost).subscribe();
      }
    })
  }

  likeClicked():void {
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

  deletePost():void {
    this.postService.deletePost(this.data.id_post).subscribe();
  }

}


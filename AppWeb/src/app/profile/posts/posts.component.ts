import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/model/post.model';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  public usuario: UsuarioModel;
  public posts: PostModel[];

  constructor(private postService: PostService, private usuarioService: UserService) {
    this.usuarioService.getUser(1).subscribe({
      next: (user: any) => {
        this.usuario = user;
        this.postService.getPostsByUser(this.usuario.id).subscribe( {
          next: (posts: any) => this.posts = posts
        });
      }
    });


  }
}

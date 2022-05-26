import { Component } from '@angular/core';
import { PostModel } from 'src/app/model/post.model';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { PostService } from 'src/app/services/post.service';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-generate-post',
  templateUrl: './generate-post.component.html',
  styleUrls: ['./generate-post.component.css']
})
export class GeneratePostComponent {

  public loggedUser: UsuarioModel;
  public nuevoPost: PostModel;

  constructor(private publicService: PublicService, private postService: PostService) {
    this.loggedUser = this.publicService.getUserLogged();
    this.nuevoPost = {
      id_user: this.loggedUser.id,
      text: '',
      likes: 0,
      shares: 0,
    };
  };

  public generarPost(): void {
    this.postService.createPost(this.nuevoPost).subscribe();
    this.nuevoPost.text = '';
  }
}

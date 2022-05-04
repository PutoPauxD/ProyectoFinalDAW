import { Component, Input } from '@angular/core';
import { PostModel } from 'src/app/model/post.model';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() usuario: UsuarioModel;
  @Input() post: PostModel;
  @Input() data: any;

  constructor(private postService: PostService) {
  }
  shareClicked() {
    console.log(this.data);
    this.postService.changePost(this.data.id_post).subscribe({
      next: () => {
        console.log(this.data.id_post);
      }
  });
}};

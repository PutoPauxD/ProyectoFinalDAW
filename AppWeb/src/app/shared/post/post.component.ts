import { Component, Input } from '@angular/core';
import { PostModel } from 'src/app/model/post.model';
import { UsuarioModel } from 'src/app/model/usuario.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input() usuario: UsuarioModel;
  @Input() post: PostModel;
  @Input() data: any;

  constructor() {
  }

}

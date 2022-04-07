import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/model/post.model';
import { UsuarioModel } from 'src/app/model/usuario.model';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public usuario: UsuarioModel;
  public post: PostModel[];

  constructor(private userService: UserService, private postService: PostService) {
    this.userService.getUser(1).subscribe(users => {
      this.usuario = users[0];
    });

    this.postService.getPosts().subscribe((post: PostModel[]) => {
      this.post = post;
    });
  }
  ngOnInit(): void {
  }

}

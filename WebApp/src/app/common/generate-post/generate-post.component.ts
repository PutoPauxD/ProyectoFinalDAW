import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() emitPost: EventEmitter<PostModel>;

  public theme: string;
  public loggedUser: UsuarioModel;
  public nuevoPost: PostModel;

  constructor(private publicService: PublicService, private postService: PostService) {
    this.emitPost = new EventEmitter<PostModel>();
    this.loggedUser = this.publicService.getUserLogged();
    this.nuevoPost = {
      id_user: this.loggedUser.id,
      text: '',
      likes: 0,
      shares: 0,
      hasMedia: 0,
      media: '',
    };
    this.theme = localStorage.getItem('theme');
  };

  imageUpload(event: any): void {
    var file = event.target.files.length;
    for(let i=0;i<file;i++)
    {
       var reader = new FileReader();
       reader.onload = (event:any) =>
       {
          this.nuevoPost.media = event.target.result;
          this.nuevoPost.hasMedia = 1;
       }
       reader.readAsDataURL(event.target.files[i]);
    }
  }

  public generarPost(): void {
    const oldtext = this.nuevoPost.text;
    this.postService.createPost(this.nuevoPost).subscribe((resp: PostModel) => {
      resp.text= oldtext,
      resp.likes=this.nuevoPost.likes,
      resp.shares=this.nuevoPost.shares,
      resp.hasMedia=this.nuevoPost.hasMedia,
      resp.media= this.nuevoPost.media,
      this.emitPost.emit(resp)
    });
    this.nuevoPost.text = "";
  }
}

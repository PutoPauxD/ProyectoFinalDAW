import { Component, OnInit } from '@angular/core';
import { PostModel } from '../model/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts: PostModel;

  constructor(private postService: PostService) {
    postService.getPosts().subscribe( posts => {
      this.posts = posts[0]
    })
  }

  ngOnInit(): void {
  }

}

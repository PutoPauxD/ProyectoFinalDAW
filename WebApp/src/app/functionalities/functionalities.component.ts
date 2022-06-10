import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-functionalities',
  templateUrl: './functionalities.component.html',
  styleUrls: ['./functionalities.component.css']
})
export class FunctionalitiesComponent {

  public theme: string;

  constructor(private postService: PostService) {
    if (localStorage.getItem('theme')) {
      this.theme = localStorage.getItem('theme');
    } else {
      localStorage.setItem('theme', 'bg-dark text-white');
    }
  }

}

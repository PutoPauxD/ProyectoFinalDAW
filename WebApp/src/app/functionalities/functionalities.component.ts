import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-functionalities',
  templateUrl: './functionalities.component.html',
  styleUrls: ['./functionalities.component.css']
})
export class FunctionalitiesComponent {

  public theme: string;
  public background: string;

  constructor() {
    if (localStorage.getItem('theme') || localStorage.getItem('background')) {
      this.theme = localStorage.getItem('theme');
      this.background = localStorage.getItem('background');
    } else {
      localStorage.setItem('theme', 'bg-dark text-white');
      localStorage.setItem('background', 'bg-image-white');
    }
  }

}

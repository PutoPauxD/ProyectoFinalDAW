import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any;
  usuario: any
  post: any

  constructor(private homeService: HomeService) {
    this.homeService.getHome().subscribe({
      next: (data: any) => {
        this.data = data;

        this.data.forEach(data => {
          this.usuario = {
            username: data.username,
            name: data.name,
            profpicture: data.profpicture,
          }
          this.post = {
            text: data.text,
            likes: data.likes,
            shares: data.shares,
          }
        });
      }

    });
  }
}

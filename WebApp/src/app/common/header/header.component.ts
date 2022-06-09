import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public theme: string;

  constructor() {
    this.theme = localStorage.getItem('theme');
  }

  ngOnInit(): void {
  }

}

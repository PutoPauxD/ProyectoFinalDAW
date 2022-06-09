import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-functionalities',
  templateUrl: './functionalities.component.html',
  styleUrls: ['./functionalities.component.css']
})
export class FunctionalitiesComponent  {

  public theme: string;

  constructor() {
    if (localStorage.getItem('theme')) {
      this.theme = localStorage.getItem('theme');
    } else {
      localStorage.setItem('theme', 'bg-dark text-white');
    }
  }
}

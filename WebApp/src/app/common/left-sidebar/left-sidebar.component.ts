import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.css']
})
export class LeftSidebarComponent  {

  constructor(private publicService: PublicService, private router: Router) { }

  public logout(): void {
    this.publicService.setUserLogged({});
    console.log(this.publicService.getUserLogged());
    this.router.navigateByUrl('/login');
  }
}

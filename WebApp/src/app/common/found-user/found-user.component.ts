import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FollowService } from 'src/app/services/follow.service';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-found-user',
  templateUrl: './found-user.component.html',
  styleUrls: ['./found-user.component.css']
})
export class FoundUserComponent  {

  @Input() user;

  constructor(private router: Router, private followService: FollowService, private publicService: PublicService) { }

  follow() {
    this.followService.setFollow(this.user.id, this.publicService.getUserLogged().id).subscribe();
  }

  navigate() {
    this.router.navigate(['/profile/'+this.user.id]);
  }

}

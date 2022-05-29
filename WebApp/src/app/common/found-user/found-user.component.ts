import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FollowService } from 'src/app/services/follow.service';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-found-user',
  templateUrl: './found-user.component.html',
  styleUrls: ['./found-user.component.css']
})
export class FoundUserComponent implements OnInit {

  @Input() user;
  public follows: boolean;

  constructor(private router: Router,
              private followService: FollowService,
              private publicService: PublicService) { }

  ngOnInit(): void {
    this.followService.checkActivityFollows(this.user.id, this.publicService.getUserLogged().id).subscribe({
      next: res => {if(res) {this.follows = true}}
    });
  }

  follow(): void {
    this.followService.setFollow(this.user.id, this.publicService.getUserLogged().id).subscribe();
    this.follows = true;
  }

  unfollow(): void {
    this.followService.unsetFollow(this.user.id, this.publicService.getUserLogged().id).subscribe();
    this.follows = false;
  }

  navigate(): void {
    this.router.navigate(['/profile/'+this.user.id]);
  }

}

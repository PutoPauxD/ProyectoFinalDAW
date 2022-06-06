import { Component } from '@angular/core';
import { NotificationService } from 'src/app/services/notification.service';
import { PostActivityService } from 'src/app/services/post-activity.service';
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {

  public data: any;

  constructor(private notificationService: NotificationService, private publicService: PublicService) {

    this.notificationService.getNotification(this.publicService.getUserLogged().id).subscribe({
      next: (activity) => this.data = activity
    })
  }


}

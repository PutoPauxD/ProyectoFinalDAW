import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent  {
  @Input() public data: any;

  constructor(private router: Router) {}

  navigate(route: string): void {
    route += this.data.id;
    this.router.navigate([route]);
  }
}

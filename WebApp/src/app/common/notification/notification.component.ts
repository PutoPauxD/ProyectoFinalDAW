import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  @Input() public data: any;
  public theme: string;

  constructor() {
    this.theme = localStorage.getItem('theme')
  }

  ngOnInit(): void {
  }

}

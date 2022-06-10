import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent  {
  @Input() public data: any;

  constructor(private router: Router, private mensajeService: MensajesService) {}

  navigate(route: string): void {
    this.mensajeService.setMsjObj({id_recibe: this.data.id});
    route += this.data.id;
    this.router.navigate([route]);
  }
}

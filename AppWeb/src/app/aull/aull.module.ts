import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { AullComponent } from './aull.component';
import { AullRoutingModule } from './aull-routing.module';



@NgModule({
  declarations: [
    ChatComponent,
    HomeComponent,
    ChatComponent,
    AullComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    AullRoutingModule
  ],
  exports: [ChatComponent]
})
export class AullModule { }

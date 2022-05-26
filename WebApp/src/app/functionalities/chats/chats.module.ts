import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared.module';
import { ChatsComponent } from './chats.component';
import { MessagesComponent } from './messages/messages.component';
import { ChatsRoutingModule } from './chats-routing.module';
import { ChatSelectorComponent } from './chat-selector/chat-selector.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ChatsComponent,
    MessagesComponent,
    ChatSelectorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ChatsRoutingModule,
  ]
})
export class ChatsModule { }

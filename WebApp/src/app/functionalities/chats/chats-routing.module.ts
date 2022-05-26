import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from 'src/app/common/chat/chat.component';
import { ChatSelectorComponent } from './chat-selector/chat-selector.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {path: '', component: ChatComponent, children: [
    {path: '', redirectTo: 'chatSelector', pathMatch: 'full'},
    { path: 'chatSelector', component: ChatSelectorComponent },
    { path: 'chat/:id', component: MessagesComponent },
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatsRoutingModule { }

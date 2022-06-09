import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { ChatComponent } from './chat/chat.component';
import { GeneratePostComponent } from './generate-post/generate-post.component';
import { FormsModule } from '@angular/forms';
import { FoundUserComponent } from './found-user/found-user.component';
import { NotificationComponent } from './notification/notification.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    FooterComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    PostComponent,
    ChatComponent,
    GeneratePostComponent,
    FoundUserComponent,
    NotificationComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports:[
    FooterComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    PostComponent,
    ChatComponent,
    GeneratePostComponent,
    FoundUserComponent,
    NotificationComponent,
    HeaderComponent
  ]
})
export class SharedModule { }

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



@NgModule({
  declarations: [
    FooterComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    PostComponent,
    ChatComponent,
    GeneratePostComponent,
    FoundUserComponent
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
    FoundUserComponent
  ]
})
export class SharedModule { }

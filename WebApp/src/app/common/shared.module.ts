import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { PostComponent } from './post/post.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    FooterComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    PostComponent,
  ]
})
export class SharedModule { }

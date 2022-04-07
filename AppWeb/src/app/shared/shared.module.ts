import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostComponent } from './post/post.component'


@NgModule({
  declarations: [
    SidebarComponent,
    PostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
    PostComponent
  ]
})
export class SharedModule { }

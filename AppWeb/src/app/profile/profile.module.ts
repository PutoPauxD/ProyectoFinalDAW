import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { PostsComponent } from './posts/posts.component';
import { SharedPostsComponent } from './shared-posts/shared-posts.component';
import { MediaComponent } from './media/media.component';
import { RouterModule, Routes } from '@angular/router';

import { ImageCropperModule } from 'ngx-image-cropper'

export const rutasHijas: Routes = [
  {path: '', component: ProfileComponent, children: [
    {path: 'post', component: PostsComponent},
    {path: 'media', component: MediaComponent},
    {path: 'shared', component: SharedPostsComponent},
  ]},
]


@NgModule({
  declarations: [
    ProfileHeaderComponent,
    ProfileComponent,
    PostsComponent,
    SharedPostsComponent,
    MediaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(rutasHijas),
    ImageCropperModule
  ],
  exports: []

})
export class ProfileModule { }

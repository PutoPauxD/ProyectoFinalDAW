import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { PostsComponent } from './posts/posts.component';
import { SharedPostsComponent } from './shared-posts/shared-posts.component';
import { MediaComponent } from './media/media.component';
import { RouterModule, Routes } from '@angular/router';

import { ImageCropperModule } from 'ngx-image-cropper';
import { ProfileHeaderModalComponent } from './profile-header/profile-header-modal/profile-header-modal.component'
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const rutasHijas: Routes = [
  {path: '', component: ProfileComponent, children: [
    {path: '', component: PostsComponent},
    {path: 'post', component: PostsComponent},
    {path: 'media', component: MediaComponent},
    {path: 'shared', component: SharedPostsComponent},
  ]
},
]


@NgModule({
  declarations: [
    ProfileHeaderComponent,
    ProfileComponent,
    PostsComponent,
    SharedPostsComponent,
    MediaComponent,
    ProfileHeaderModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(rutasHijas),
    ImageCropperModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: []

})
export class ProfileModule { }

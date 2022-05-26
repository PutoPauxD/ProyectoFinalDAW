import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/services/auth.guard';

import { ProfileComponent } from './profile.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfilePostsComponent } from './profile-posts/profile-posts.component';
import { ProfileSharedPostsComponent } from './profile-shared-posts/profile-shared-posts.component';
import { ProfileMediaPostsComponent } from './profile-media-posts/profile-media-posts.component';
import { SharedModule } from 'src/app/common/shared.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileHeaderModalComponent } from './profile-header/profile-header-modal/profile-header-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileHeaderComponent,
    ProfilePostsComponent,
    ProfileSharedPostsComponent,
    ProfileMediaPostsComponent,
    ProfileHeaderModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    ImageCropperModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }

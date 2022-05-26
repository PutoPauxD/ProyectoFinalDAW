import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileMediaPostsComponent } from './profile-media-posts/profile-media-posts.component';
import { ProfilePostsComponent } from './profile-posts/profile-posts.component';
import { ProfileSharedPostsComponent } from './profile-shared-posts/profile-shared-posts.component';
import { ProfileComponent } from './profile.component';

export const rutasHijas: Routes = [
  {
    path: '', component: ProfileComponent, children: [
      {path: '', redirectTo: 'post', pathMatch: 'full'},
      {path: 'post', component: ProfilePostsComponent},
      {path: 'media', component: ProfileMediaPostsComponent},
      {path: 'shared', component: ProfileSharedPostsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(rutasHijas)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

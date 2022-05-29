import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunctionalitiesComponent } from './functionalities.component';
import { FunctionalitiesRoutingModule } from './functionalities-routing.module';
import { SharedModule } from '../common/shared.module';
import { RouterModule } from '@angular/router';
import { ChatsModule } from './chats/chats.module';
import { SearchModule } from './search/search.module';
import { ProfileModule } from './profile/profile.module';
import { HomeModule } from './home/home.module';
import { NotificationsModule } from './notifications/notifications.module';



@NgModule({
  declarations: [
    FunctionalitiesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FunctionalitiesRoutingModule,
    HomeModule,
    ProfileModule,
    SearchModule,
    ChatsModule,
    NotificationsModule
  ]
})
export class FunctionalitiesModule { }

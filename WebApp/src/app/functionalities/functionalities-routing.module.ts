import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FunctionalitiesComponent } from './functionalities.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component: FunctionalitiesComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'messages', component: MessagesComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'search', component: SearchComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionalitiesRoutingModule { }

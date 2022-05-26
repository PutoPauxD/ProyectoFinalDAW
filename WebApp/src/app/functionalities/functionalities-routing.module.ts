import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './chats/chats.component';
import { FunctionalitiesComponent } from './functionalities.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component: FunctionalitiesComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'chats', loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule)},
    {path: 'profile/:id', loadChildren: () => import('./profile/profile.module').then( m => m.ProfileModule)},
    {path: 'search', component: SearchComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionalitiesRoutingModule { }

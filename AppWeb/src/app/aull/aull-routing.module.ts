import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { AullComponent } from './aull.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: AullComponent},
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AullRoutingModule { }

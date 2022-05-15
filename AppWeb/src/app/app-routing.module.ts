import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileModule } from './profile/profile.module';

const routes: Routes = [
  { path: 'profile/:id', loadChildren:() => ProfileModule },
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

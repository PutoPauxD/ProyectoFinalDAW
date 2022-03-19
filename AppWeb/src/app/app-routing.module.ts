import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileModule } from './profile/profile.module';

const routes: Routes = [
  { path: '', loadChildren:() => ProfileModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

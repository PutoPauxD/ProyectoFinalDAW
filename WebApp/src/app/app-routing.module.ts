import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./auth/public.module').then( m => m.PublicModule)
  },
  {
    path: '', loadChildren: () => import('./functionalities/functionalities.module').then( m => m.FunctionalitiesModule), canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

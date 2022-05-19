import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./auth/auth.module')
    .then( m => m.AuthModule)
  },
  { path: 'home', loadChildren: () => import('./aull/aull.module')
  .then( m => m.AullModule),
  canActivate: [AuthGuard]
},
{ path: 'profile/:id', loadChildren: () => import('./profile/profile.module')
.then( m => m.ProfileModule),
canActivate: [AuthGuard]
},
{ path: '**', loadChildren: () => import('./auth/auth.module')
  .then( m => m.AuthModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

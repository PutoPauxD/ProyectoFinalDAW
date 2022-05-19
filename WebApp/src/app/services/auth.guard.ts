import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { PublicService } from "./public.service";

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{
  constructor(private publicService: PublicService, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.publicService.isLogged() === true) {
      return this.publicService.isLogged();
    } else {
      return this.router.navigateByUrl('/login')
    }
  }
}

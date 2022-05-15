import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable();
export class AuthGuard implements CanActivate{
  constructor(private auth: AuthService, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) {
    if (!this.auth.isLoggedIn()) {
      this.router.parseUrl('/login')
    } else {
      this.router.parseUrl('/home');
    }
  }
}

import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate,
  CanLoad,
  Route,
  UrlSegment
} from '@angular/router'
import { AuthenticationService } from './authentication.service'

@Injectable({
  providedIn: 'root'
})
export class UnauthenticatedGuard implements CanActivate, CanLoad {
  constructor(private readonly router: Router, private readonly authenticationService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkLogin()
  }

  canLoad(route: Route, segments: UrlSegment[]) {
    return this.checkLogin()
  }

  private checkLogin() {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate([''])
      return false
    }
    return true
  }
}

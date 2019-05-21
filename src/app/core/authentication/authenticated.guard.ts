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
export class AuthenticatedGuard implements CanActivate, CanLoad {
  constructor(private readonly router: Router, private readonly authenticationService: AuthenticationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.checkLogin(state.url)
  }

  canLoad(route: Route, segments: UrlSegment[]) {
    return this.checkLogin(route.path)
  }

  private checkLogin(returnUrl: string) {
    if (!this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/login'], { queryParams: { returnUrl } })
      return false
    }
    return true
  }
}

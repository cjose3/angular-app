import { Component } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { AuthenticationService } from './core/authentication/authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  isHandset$: Observable<boolean> = this.breakPointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches))

  isLoggedIn: boolean
  constructor(private breakPointObserver: BreakpointObserver, private authenticationService: AuthenticationService) {
    this.isLoggedIn = true //authenticationService.isLoggedIn()
  }
}

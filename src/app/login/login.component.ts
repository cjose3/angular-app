import { Component, OnInit } from '@angular/core'
import { AuthenticationService } from '../core/authentication/authentication.service'
import { UserCredentials } from '../shared/interfaces/user-credentials'
import { Router } from '@angular/router'

@Component({
  selector: 'app-login.flex.h-100',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private readonly authenticationService: AuthenticationService, private readonly router: Router) {}

  login(credentials: UserCredentials) {
    this.authenticationService.login(credentials).subscribe(
      _ => {
        this.router.navigateByUrl('/')
      },
      error => {
        console.log(error)
      }
    )
  }
}

import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { User } from 'src/app/shared/interfaces/user'
import { UserCredentials } from 'src/app/shared/interfaces/user-credentials'
import { JwtService } from './jwt.service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private readonly http: HttpClient, private readonly jwtService: JwtService) {}

  login(credentials: UserCredentials): Observable<User> {
    return this.http.post<User>('/auth', credentials)
  }

  logout() {}

  isLoggedIn() {
    return this.jwtService.getToken() && !this.jwtService.isExpired()
  }
}

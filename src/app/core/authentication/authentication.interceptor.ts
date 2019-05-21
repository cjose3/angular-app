import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { JwtService } from './jwt.service'

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private readonly jwtService: JwtService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = this.jwtService.getToken()

    if (jwt) {
      const newReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${jwt}`)
      })

      return next.handle(newReq)
    }

    return next.handle(req)
  }
}

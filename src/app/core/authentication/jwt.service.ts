import { Injectable } from '@angular/core'
import { CoreModule } from '../core.module'

@Injectable()
export class JwtService {
  save() {}

  getToken(): string | undefined {
    return ''
  }

  isExpired(): boolean {
    return false
  }

  delete() {}
}

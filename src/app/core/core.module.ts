import { NgModule, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common'
import { throwIfAlreadyLoaded } from './ensure-module-load-once.guard'
import { MaterialModule } from './material.module'
import { ToolbarComponent } from './toolbar/toolbar.component'
import { SidenavComponent } from './sidenav/sidenav.component'
import { AuthenticationService } from './authentication/authentication.service'
import { HttpClientModule } from '@angular/common/http'
import { JwtService } from './authentication/jwt.service'

@NgModule({
  declarations: [ToolbarComponent, SidenavComponent],
  imports: [CommonModule, MaterialModule, HttpClientModule],
  exports: [MaterialModule, HttpClientModule, ToolbarComponent, SidenavComponent],
  providers: [AuthenticationService, JwtService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule)
  }
}
